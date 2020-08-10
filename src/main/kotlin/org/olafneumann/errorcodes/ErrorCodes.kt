package org.olafneumann.errorcodes

import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.codes.Db2ZosCodeDescriptionProvider
import org.olafneumann.errorcodes.codes.MQCodeDescriptionProvider
import org.olafneumann.errorcodes.ui.UiController
import kotlin.browser.window

fun main() {
    try {
        initErrorCodes()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize ErrorCodesViewer: ${exception.message}")
    }
}

private val codeDescriptionProviders = listOf<CodeDescriptionProvider>(Db2ZosCodeDescriptionProvider(), MQCodeDescriptionProvider())

private fun initErrorCodes() {
    // initialize presentation code
    UiController(codeDescriptionProviders)

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()
}
