package org.olafneumann.errorcodes.html.browser

import org.w3c.dom.Node

@JsName("$")
external fun jQuery(element: Node): JQuery

external class JQuery() {
    fun dropdown(action: String)
}