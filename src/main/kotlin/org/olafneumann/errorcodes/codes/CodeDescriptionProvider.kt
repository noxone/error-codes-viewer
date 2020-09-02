package org.olafneumann.errorcodes.codes

import io.ktor.http.*

interface CodeDescriptionProvider {
    val id: String
    val product: Product
    val name: String
        get() = "${product.vendor} ${product.title} ${product.version}"
    val comparator: Comparator<CodeDescriptionLocation>
    suspend fun loadLocationList(): List<CodeDescriptionLocation>
    suspend fun loadCodeDescription(url: Url): CodeDescription
    suspend fun getLocationByCode(code: String): CodeDescriptionLocation?

    data class Product(
        val vendor: String,
        val title: String,
        val version: String
    )
}

