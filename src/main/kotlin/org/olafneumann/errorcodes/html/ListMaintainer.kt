package org.olafneumann.errorcodes.html

import org.w3c.dom.*

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

    internal fun filter(filter: (T) -> Boolean) {
        elements.entries.forEach { it.value.classList.toggle("d-none", !filter.invoke(it.key)) }
    }

    private fun Element.shouldBeRemoved(): Boolean =
        !(this is HTMLFormElement || this.classList.contains("gr-always-there"))

    private fun HTMLElement.removeChildren() =
        childElementCount
            .downTo(0)
            .mapNotNull { children[it] }
            .forEach { removeChild(it) }

    fun toggleActive(item: T?) =
        elements.forEach { it.value.classList.toggle("active", item != null && it.key == item) }
}