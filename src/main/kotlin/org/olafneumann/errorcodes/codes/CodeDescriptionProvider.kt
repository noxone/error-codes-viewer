package org.olafneumann.errorcodes.codes

interface CodeDescriptionProvider {
    val producer: String
    val title: String
    val version: String
    val name: String
        get() = "$producer $title $version"
    val comparator: Comparator<CodeDescriptionLocation>
    suspend fun loadLocationList(): List<CodeDescriptionLocation>
    suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription
}

