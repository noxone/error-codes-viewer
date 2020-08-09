package org.olafneumann.errorcodes

import org.olafneumann.errorcodes.codes.CodeDescriptionLoader
import org.olafneumann.errorcodes.ui.UiController
import kotlin.browser.window

fun main() {
    try {
        initErroCodes()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize ErrorCodesViewer: ${exception.message}")
    }
}

private fun initErroCodes() {
    // initialize presentation code
    UiController()

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()

    CodeDescriptionLoader.getLocations()
}
