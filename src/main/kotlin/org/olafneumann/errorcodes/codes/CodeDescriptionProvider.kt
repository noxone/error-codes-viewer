package org.olafneumann.errorcodes.codes

interface CodeDescriptionProvider {
    val product: Product
    val name: String
        get() = "${product.vendor} ${product.title} ${product.version}"
    val comparator: Comparator<CodeDescriptionLocation>
    suspend fun loadLocationList(): List<CodeDescriptionLocation>
    suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription

    data class Product(
        val vendor: String,
        val title: String,
        val version: String
    )
}

