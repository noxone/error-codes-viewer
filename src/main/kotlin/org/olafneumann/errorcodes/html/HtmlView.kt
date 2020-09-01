package org.olafneumann.errorcodes.html

import kotlinx.html.ButtonType
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.html.browser.HtmlHelper
import org.olafneumann.errorcodes.html.browser.jQuery
import org.w3c.dom.*
import kotlinx.browser.document
import kotlinx.serialization.Serializable
import org.olafneumann.errorcodes.html.browser.StateContainer
import org.olafneumann.errorcodes.ui.UiController
import kotlin.reflect.KClass

class HtmlView(
    private val controller: DisplayContract.Controller
) : DisplayContract.View {
    private val divLabelProducts = HtmlHelper.getElementById<HTMLElement>(ID_LABEL_PRODUCTS)
    private val divListProducts = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_PRODUCTS)
    private val divListCodes = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_CODES)
    private val inputSearch = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_SEARCH)
    private val divContentCode = HtmlHelper.getElementById<HTMLDivElement>(ID_CONTENT_CODE)
    private val divContentFrame = HtmlHelper.getElementById<HTMLIFrameElement>(ID_CONTENT_FRAME)
    private val divContentHeader = HtmlHelper.getElementById<HTMLHeadingElement>(ID_CONTENT_HEADER)
    private val divContentSource = HtmlHelper.getElementById<HTMLAnchorElement>(ID_CONTENT_SOURCE)

    private val stateContainer = StateContainer(CodeLocationStateTransformer(controller), CodeLocationStateComparator())

    init {
        inputSearch.addEventListener("input", { event ->
            event.stopPropagation()
            val lowerCaseFilter = inputSearch.value.toLowerCase()
            listCodes.filter { it.code.toLowerCase().contains(lowerCaseFilter) }
        })
    }

    private val listProducts = ListMaintainer<CodeDescriptionProvider>(
        divListProducts,
        { createProductLink(it) },
        { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.name, b.name) })
    private val listCodes = ListMaintainer<CodeDescriptionLocation>(divListCodes, { createCodeDescriptionLink(it) })

    override fun showCodeDescriptionProviders(providers: List<CodeDescriptionProvider>) =
        listProducts.showItems(providers)

    override fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider) {
        inputSearch.value = ""
        divLabelProducts.innerText = provider.name
        listProducts.toggleActive(provider)
    }

    override fun showCodeDescriptionLocations(locations: List<CodeDescriptionLocation>?) =
        if (locations != null) {
            listCodes.showItems(locations, locations.first().provider.comparator)
            inputSearch.focus()
        } else {
            listCodes.setLoading()
        }

    override fun selectCodeDescriptionLocation(location: CodeDescriptionLocation) {
        listCodes.toggleActive(location)
    }

    private var currentLocation: CodeDescriptionLocation? = null

    override fun showCodeDescription(location: CodeDescriptionLocation?) {
        if (location != null && currentLocation?.code != location.code) {
            stateContainer.push(CodeLocationState(location))
        }

        divContentHeader.childElementCount
            .downTo(0)
            .mapNotNull { divContentHeader.children[it] }
            .forEach { divContentHeader.removeChild(it) }
        if (location != null) {
            divContentHeader.appendChild(document.create.span(classes = "ec-code-header") {
                span(classes = "ec-product-vendor") { +location.provider.product.vendor }
                span(classes = "ec-product-title") { +location.provider.product.title }
                span(classes = "ec-product-version") { +location.provider.product.version }
                +": "
                span(classes = "font-weight-bold") { +location.code }
            })
            divContentSource.href = location.displayUrl.toString()
            divContentSource.innerText = location.displayUrl.toString()
            if (location.content != null) {
                divContentFrame.classList.toggle("d-none", true)
                divContentCode.classList.toggle("d-none", false)
                divContentFrame.src = ""
                divContentCode.innerHTML = location.content.content
            } else {
                divContentFrame.classList.toggle("d-none", false)
                divContentCode.classList.toggle("d-none", true)
                divContentFrame.contentWindow?.location?.replace(location.url.toString())
                divContentCode.innerHTML = ""
            }
        } else {
            divContentSource.href = "#"
            divContentSource.innerText = "\u00A0"
            divContentFrame.src = ""
        }
        currentLocation = location
    }

    private fun createProductLink(provider: CodeDescriptionProvider): HTMLElement =
        document.create.button(classes = "dropdown-item", type = ButtonType.button) {
            onClickFunction = {
                it.stopPropagation()
                jQuery(divListProducts.parentNode!!).dropdown("toggle")
                controller.selectCodeDescriptionProvider(provider)
            }
            span("ec-product-vendor") { +provider.product.vendor }
            span("ec-product-title") { +provider.product.title }
            span("ec-product-version") { +provider.product.version }
        }

    private fun createCodeDescriptionLink(location: CodeDescriptionLocation): HTMLElement =
        document.create.button(classes = "list-group-item list-group-item-action") {
            onClickFunction = {
                it.stopPropagation()
                controller.selectCodeDescriptionLocation(location)
            }
            div(classes = "ec-location-link") {
                span(classes = "ec-code") { +location.code }
                location.summary?.let { span("ec-summary") { +it } }
            }
        }

    companion object {
        const val ID_LABEL_PRODUCTS = "ec_label_products"
        const val ID_LIST_PRODUCTS = "ec_list_products"
        const val ID_LIST_CODES = "ec_list_codes"
        const val ID_INPUT_SEARCH = "ec_input_search"
        const val ID_CONTENT_CODE = "ec_content_code"
        const val ID_CONTENT_FRAME = "ec_content_frame"
        const val ID_CONTENT_HEADER = "ec_source_header"
        const val ID_CONTENT_SOURCE = "ec_source_link"
    }

    @Serializable
    private data class CodeLocationState constructor(
        val providerId: String,
        val code: String
    ) : StateContainer.State {
        constructor(location: CodeDescriptionLocation) : this(location.provider.id, location.code)
    }

    private class CodeLocationStateTransformer(
        private val controller: DisplayContract.Controller
    ) : StateContainer.StateHandler<CodeLocationState> {
        override fun fromHash(hash: String): CodeLocationState =
            hash.split(delimiters = arrayOf("/"), ignoreCase = false, limit = 2)
                .let { CodeLocationState(it[0], it[1]) }

        override fun toHash(state: CodeLocationState): StateContainer.HashContainer =
            StateContainer.HashContainer(
                listOf(state.providerId, state.code).joinToString("/"),
                "${state.providerId}: ${state.code}")

        override fun handle(state: Any/*CodeLocationState*/) {
            val dyn: dynamic = state
            controller.selectCodeDescriptionLocation(dyn.providerId as String, dyn.code as String)
        }
    }

    private class CodeLocationStateComparator : Comparator<Any> {
        override fun compare(a: Any, b: Any): Int {
            val da: dynamic = a
            val db: dynamic = b
            return (da.code as String).compareTo(db.code as String)
        }
    }
}
