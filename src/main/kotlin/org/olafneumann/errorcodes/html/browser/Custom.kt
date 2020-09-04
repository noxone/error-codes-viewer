package org.olafneumann.errorcodes.html.browser

import kotlin.js.Promise

external val navigator: Navigator

open external class Navigator {
    val clipboard: Clipboard
}
external class Clipboard {
    fun writeText(text: String): Promise<Any>
}

external fun encodeURIComponent(str: String): String
external fun decodeURIComponent(str: String): String
