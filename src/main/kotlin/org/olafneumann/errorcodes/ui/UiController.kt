package org.olafneumann.errorcodes.ui

import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.html.HtmlView

class UiController : DisplayContract.Controller {
    private val view: DisplayContract.View = HtmlView(this)
}