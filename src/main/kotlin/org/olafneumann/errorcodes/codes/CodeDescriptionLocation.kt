package org.olafneumann.errorcodes.codes

import io.ktor.http.Url

data class CodeDescriptionLocation(
    val provider: CodeDescriptionProvider,
    val code: String, // the short code visible in error messages
    val summary: String? = null, // an optional summary of the error
    val url: Url?,
    val displayUrl: Url? = url,
    val forceLoad: Boolean = false, // if the url cant be loaded into the iframe we need to download is via JS
    var content: CodeDescription? = null // maybe the content provider will download the error message and we can display text directly and thus not use the iframe
)