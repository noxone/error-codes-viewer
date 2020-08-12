package org.olafneumann.errorcodes.codes

import io.ktor.http.Url

data class CodeDescriptionLocation(
    val provider: CodeDescriptionProvider,
    val code: String,
    val additionalText: String? = null,
    val url: Url,
    val displayUrl: Url = url,
    val content: String? = null
)