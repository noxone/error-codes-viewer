package org.olafneumann.errorcodes.codes

import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.request.get
import io.ktor.http.Url
import kotlin.js.Date
import kotlin.math.absoluteValue

abstract class AbstractUrlCodeDescriptionProvider(
    override val product: CodeDescriptionProvider.Product
) : CodeDescriptionProvider {
    companion object {
        private val client = HttpClient(Js)
    }

    protected abstract val indexUrl: Url
    protected abstract val codeDescriptionRegex: Regex
    protected abstract fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation

    override suspend fun loadLocationList(): List<CodeDescriptionLocation> {
        val siteContent = client.get<String>(indexUrl)
        return codeDescriptionRegex.findAll(siteContent)
                .map { convertMatchToCodeDescriptionLocation(it) }
                .toList()
    }

    override suspend fun loadCodeDescription(location: CodeDescriptionLocation): CodeDescription {
        val siteContent = client.get<String>(location.url)
        return CodeDescription(siteContent, Date())
    }

    override val comparator: Comparator<CodeDescriptionLocation> =
            Comparator { a, b -> String.CASE_INSENSITIVE_ORDER.compare(a.code, b.code) }
}
