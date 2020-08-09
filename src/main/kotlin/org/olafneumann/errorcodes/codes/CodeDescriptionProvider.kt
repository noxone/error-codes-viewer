package org.olafneumann.errorcodes.codes

interface CodeDescriptionProvider {
    val name: String
    val comparator: Comparator<CodeDescriptionLocation>
    suspend fun loadLocationList(): List<CodeDescriptionLocation>
    suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription
}

