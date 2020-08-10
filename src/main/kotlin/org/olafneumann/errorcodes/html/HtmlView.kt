package org.olafneumann.errorcodes.html

import kotlinx.html.dom.create
import kotlinx.html.js.a
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.html.browser.HtmlHelper
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document

class HtmlView(
        private val controller: DisplayContract.Controller
) : DisplayContract.View {
    private val divListProducts = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_PRODUCTS)
    private val divListCodes = HtmlHelper.getElementById<HTMLDivElement>(ID_LIST_CODES)
    private val divContentCode = HtmlHelper.getElementById<HTMLDivElement>(ID_CONTENT_CODE)

    private val listProducts = ListMaintainer<CodeDescriptionProvider>(divListProducts, { createProductLink(it) }, Comparator { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.name, b.name) })
    private val listCodes = ListMaintainer<CodeDescriptionLocation>(divListCodes, { createCodeLink(it) })

    override fun showCodeDescriptionProviders(providers: List<CodeDescriptionProvider>) = listProducts.showItems(providers)
    override fun showCodeDescriptionLocations(provider: CodeDescriptionProvider, locations: List<CodeDescriptionLocation>) = listCodes.showItems(locations, provider.comparator)

    override fun setContent(content: String) {
        divContentCode.innerHTML = content
    }

    private fun createProductLink(provider: CodeDescriptionProvider): HTMLElement =
            document.create.a(href = "#", classes = "dropdown-item") {
                onClickFunction = {
                    it.stopPropagation()
                    controller.selectCodeDescriptionProvider(provider)
                }
                span("product-producer") {
                    +provider.producer
                }
                span("product-title") {
                    +provider.title
                }
                span("product-version") {
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
        const val ID_LIST_PRODUCTS = "ec_list_products"
        const val ID_LIST_CODES = "ec_list_codes"
        const val ID_CONTENT_CODE = "ec_content_code"
    }
}