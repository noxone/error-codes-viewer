package org.olafneumann.errorcodes.html

import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.span
import org.w3c.dom.*
import kotlinx.browser.document

internal class ListMaintainer<T>(
    private val parent: HTMLDivElement,
    private inline val elementCreator: (T) -> HTMLElement,
    var comparator: Comparator<T> = Comparator { a, b ->
        String.CASE_INSENSITIVE_ORDER.compare(
            a.toString(),
            b.toString()
        )
    }
) {
    private var elements: Map<T, HTMLElement> = emptyMap()

    fun showItems(items: List<T>, comparator: Comparator<T> = this.comparator) {
        this.comparator = comparator
        parent.removeChildren()
        elements = items.sortedWith(comparator)
            .reversed()
            .map { it to elementCreator(it) }
            .toMap()
        elements.forEach { parent.prepend(it.value) }
    }

    internal fun setLoading() {
        parent.removeChildren()
        parent.appendChild(createLoader())
    }

    internal fun filter(filter: (T) -> Boolean) {
        elements.entries.forEach { it.value.classList.toggle("d-none", !filter.invoke(it.key)) }
    }

    private fun createLoader(): HTMLElement =
        document.create.div(classes="d-flex justify-content-center my-5") {
            div(classes="spinner-grow") {
                span(classes="sr-only") {
                    +"Loading..."
                }
            }
        }

    private fun HTMLElement.removeChildren() =
        childElementCount
            .downTo(0)
            .mapNotNull { children[it] }
            .forEach { removeChild(it) }

    fun toggleActive(item: T?) =
        elements.forEach { it.value.classList.toggle("active", item != null && it.key == item) }
}