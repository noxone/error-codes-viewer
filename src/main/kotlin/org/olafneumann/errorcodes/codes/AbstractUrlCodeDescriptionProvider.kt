package org.olafneumann.errorcodes.codes

import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.request.get
import io.ktor.http.Url
import kotlin.js.Date

abstract class AbstractUrlCodeDescriptionProvider(
    override val id: String,
    override val product: CodeDescriptionProvider.Product,
    private val useCorsProxy: Boolean = false
) : CodeDescriptionProvider {
    companion object {
        private  const val CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        private val client = HttpClient(Js)
    }

    protected abstract val indexUrl: Url
    protected abstract val codeDescriptionRegex: Regex
    protected abstract fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation

    private var codes: List<CodeDescriptionLocation>? = null

    override suspend fun loadLocationList(): List<CodeDescriptionLocation> {
        if (codes == null) {
            val siteContent: String = client.get(indexUrl.addProxyIfRequired())
            codes = codeDescriptionRegex.findAll(siteContent)
                .map { convertMatchToCodeDescriptionLocation(it) }
                .toList()
        }
        return codes!!
    }

    override suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription? {
        return location.url?.let { url ->
            val siteContent: String = convertCodeDescriptionContent(client.get(url.addProxyIfRequired()))
            CodeDescription(siteContent, Date())
        }
    }

    protected open suspend fun convertCodeDescriptionContent(downloadedContent: String) =
        HtmlCleaner.clean(downloadedContent)

    override suspend fun getLocationByCode(code: String): CodeDescriptionLocation? =
        loadLocationList().firstOrNull { it.code == code }

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.code, b.code) }

    private fun Url.addProxyIfRequired() = if (useCorsProxy) Url("${CORS_PROXY}${toString()}") else this
}
