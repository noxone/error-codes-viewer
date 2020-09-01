package org.olafneumann.errorcodes.codes

import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.request.get
import io.ktor.http.Url
import kotlin.js.Date
import kotlin.math.absoluteValue

abstract class AbstractUrlCodeDescriptionProvider(
    override val id: String,
    override val product: CodeDescriptionProvider.Product
) : CodeDescriptionProvider {
    companion object {
        private val client = HttpClient(Js)
    }

    protected abstract val indexUrl: Url
    protected abstract val codeDescriptionRegex: Regex
    protected abstract fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation

    private var codes: List<CodeDescriptionLocation>? = null

    override suspend fun loadLocationList(): List<CodeDescriptionLocation> {
        if (codes == null) {
            val siteContent = client.get<String>(indexUrl)
            codes = codeDescriptionRegex.findAll(siteContent)
                .map { convertMatchToCodeDescriptionLocation(it) }
                .toList()
        }
        return codes!!
    }

    override suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription {
        val siteContent = client.get<String>(location.url)
        return CodeDescription(siteContent, Date())
    }

    override suspend fun getLocationByCode(code: String): CodeDescriptionLocation? = loadLocationList().firstOrNull { it.code == code }

    override val comparator: Comparator<CodeDescriptionLocation> =
            Comparator { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.code, b.code) }
}
