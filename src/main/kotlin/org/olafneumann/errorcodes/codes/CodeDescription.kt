package org.olafneumann.errorcodes.codes

import kotlin.js.Date

data class CodeDescription (
    val content: String,
    val dataOfLoading: Date = Date()
)