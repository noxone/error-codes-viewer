package org.olafneumann.errorcodes

import org.olafneumann.errorcodes.codes.*
import org.olafneumann.errorcodes.ui.UiController
import kotlinx.browser.window

fun main() {
    try {
        initErrorCodes()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize ErrorCodesViewer: ${exception.message}")
    }
}

private val codeDescriptionProviders = listOf<CodeDescriptionProvider>(
    Db2Zos10CodeDescriptionProvider(),
    Db2Zos11CodeDescriptionProvider(),
    Db2Zos12CodeDescriptionProvider(),
    MQ8CodeDescriptionProvider()
)

private fun initErrorCodes() {
    // initialize presentation code
    UiController(codeDescriptionProviders)

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()
}
