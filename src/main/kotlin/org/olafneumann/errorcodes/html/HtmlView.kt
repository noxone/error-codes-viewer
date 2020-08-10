package org.olafneumann.errorcodes.html

import kotlinx.html.dom.create
import kotlinx.html.js.a
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.html.browser.HtmlHelper
import org.olafneumann.errorcodes.html.browser.jQuery
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document

class HtmlView(
        private val controller: DisplayContract.Controller
) : DisplayContract.View {
    private val divLabelProducts = HtmlHelper.getElementById<HTMLAnchorElement>(ID_LABEL_PRODUCTS)
    private val divListProducts = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_PRODUCTS)
    private val divListCodes = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_CODES)
    private val inputSearch = HtmlHelper.getElementById<HTMLInputElement>(ID_INPUT_SEARCH)
    private val divContentCode = HtmlHelper.getElementById<HTMLDivElement>(ID_CONTENT_CODE)
    private val divContentFrame = HtmlHelper.getElementById<HTMLIFrameElement>(ID_CONTENT_FRAME)

    init {
        inputSearch.addEventListener("input", {
            it.stopPropagation()
            val lowerCaseFilter = inputSearch.value.toLowerCase()
            listCodes.filter { it.code.toLowerCase().contains(lowerCaseFilter) }
        })
    }

    private val listProducts = ListMaintainer<CodeDescriptionProvider>(divListProducts, { createProductLink(it) }, Comparator { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.name, b.name) })
    private val listCodes = ListMaintainer<CodeDescriptionLocation>(divListCodes, { createCodeLink(it) })

    override fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider) {
        divLabelProducts.innerText = provider.name
        listProducts.toggleActive(provider)
    }

    override fun selectCodeDescriptionLocation(location: CodeDescriptionLocation) {
        listCodes.toggleActive(location)
    }

    override fun showCodeDescriptionProviders(providers: List<CodeDescriptionProvider>) = listProducts.showItems(providers)
    override fun showCodeDescriptionLocations(provider: CodeDescriptionProvider, locations: List<CodeDescriptionLocation>) = listCodes.showItems(locations, provider.comparator)

    override fun setContent(location: CodeDescriptionLocation, content: String) {
        // divContentCode.innerHTML = content
        divContentFrame.src = location.url.toString()
    }

    private fun createProductLink(provider: CodeDescriptionProvider): HTMLElement =
            document.create.a(href = "#", classes = "dropdown-item") {
                onClickFunction = {
                    it.stopPropagation()
                    jQuery(divListProducts.parentNode!!).dropdown("toggle")
                    controller.selectCodeDescriptionProvider(provider)
                }
                span("ec-product-producer") {
                    +provider.producer
                }
                span("ec-product-title") {
                    +provider.title
                }
                span("ec-product-version") {
                    +provider.version
                }
            }

    private fun createCodeLink(location: CodeDescriptionLocation): HTMLElement =
            document.create.a(href = "#", classes = "list-group-item list-group-item-action") {
                onClickFunction = {
                    it.stopPropagation()
                    controller.selectCodeDescriptionLocation(location)
                }
                +location.code
            }

    companion object {
        const val ID_LABEL_PRODUCTS = "ec_label_products"
        const val ID_LIST_PRODUCTS = "ec_list_products"
        const val ID_LIST_CODES = "ec_list_codes"
        const val ID_INPUT_SEARCH = "ec_input_search"
        const val ID_CONTENT_CODE = "ec_content_code"
        const val ID_CONTENT_FRAME = "ec_content_frame"
    }
}