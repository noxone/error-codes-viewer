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
    MQ8CodeDescriptionProvider(),
    HttpCodeDescriptionProvider(),
    FtpCodeDescriptionProvider(),
    SmtpCodeDescriptionProvider()
)

private fun initErrorCodes() {
    // check preconditions
    val checkErrors = codeDescriptionProviders.flatMap { checkCodeDescriptionProvider(it) }
    if (checkErrors.isNotEmpty()){
        checkErrors.forEach { console.error(it) }
        throw RuntimeException("ErrorCodeViewer could not be initialized because of init check errors.")
    }

    // initialize presentation code
    UiController(codeDescriptionProviders)

    // store information, that we were already here
    ApplicationSettings.storeUserLastInfo()
}

private fun checkCodeDescriptionProvider(codeDescriptionProvider: CodeDescriptionProvider): List<String> {
    if (codeDescriptionProvider.id.contains("/"))
        return listOf("The ID '${codeDescriptionProvider.id}' contains a slash '/'. This is not allowed.")
    return emptyList()
}