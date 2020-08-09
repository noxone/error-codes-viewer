package org.olafneumann.errorcodes.html.browser

import org.w3c.dom.HTMLElement
import org.w3c.dom.get
import kotlin.browser.document

internal object HtmlHelper {
    internal inline fun <reified T : HTMLElement> getElementById(id: String): T {
        try {
            return document.getElementById(id) as T
        } catch (e: ClassCastException) {
            throw RuntimeException("Unable to find element with id '$id'.", e)
        }
    }

    internal inline fun <reified T : HTMLElement> getElementsByClassName(className: String): List<T> {
        try {
            val collection = document.getElementsByClassName(className)
            return (0 until collection.length).map { collection[it] as T }
        } catch (e: ClassCastException) {
            throw RuntimeException("Unable to find elements with class name '$className'.", e)
        }
    }
}
