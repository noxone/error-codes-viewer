package org.olafneumann.errorcodes.codes

import io.ktor.http.Url

data class CodeDescriptionLocation(
    val provider: CodeDescriptionProvider,
    val code: String,
    val url: String
)