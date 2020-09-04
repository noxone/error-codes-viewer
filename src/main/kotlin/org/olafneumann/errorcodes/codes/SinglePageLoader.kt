package org.olafneumann.errorcodes.codes

import io.ktor.http.Url
import kotlin.math.absoluteValue

abstract class SinglePageCodeDescriptionProvider(
    id: String,
    product: CodeDescriptionProvider.Product,
    override val indexUrl: Url
) : AbstractUrlCodeDescriptionProvider(id, product) {

    protected fun createContentString(vararg pairs: Pair<String, String>) =
        "<dl><dt>" + pairs.joinToString(separator = "</dd><dt>") { "${it.first}</dt><dd>${it.second}" } + "</dd></dl>"

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> a.code.toInt().absoluteValue.compareTo(b.code.toInt().absoluteValue) }
}

class HttpCodeDescriptionProvider : SinglePageCodeDescriptionProvider(
    id = "http",
    product = CodeDescriptionProvider.Product("W3C", "HTTP", "any"),
    indexUrl = Url(INDEX_URL)
) {
    private companion object {
        private const val INDEX_URL = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    }

    override val codeDescriptionRegex =
        Regex("<dt><a\\s[^>]*?href=\"([^\"]+)\"[^>]+><code>([0-9]+)\\s+([^<]+)</code></a>( \\()?(?:.|\\s)*?<dd>(.+?)</dd>")
    private val contentExtractionRegex =
        Regex("<article[^>]*>((?:.|\\s)*?)<h2 id=\"Specifications\">Specifications</h2>")

    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val link = matchResult.groups[1]?.value ?: "NO HREF"
        val code = matchResult.groups[2]?.value ?: "NO CODE"
        val summary = matchResult.groups[3]?.value ?: "NO SUMMARY"
        val description = matchResult.groups[5]?.value ?: "NO DESCRIPTION"
        val linkAvailable = matchResult.groups[4] == null
        val url = if (linkAvailable) Url("https://developer.mozilla.org${link}") else Url(INDEX_URL)
        return CodeDescriptionLocation(
            provider = this,
            code = code,
            summary = summary,
            content = if (!linkAvailable) CodeDescription(
                content = createContentString("Code" to code, "Summary" to summary, "Description" to description)
            ) else null,
            url = url,
            displayUrl = url,
            forceLoad = true
        )
    }

    override suspend fun convertCodeDescriptionContent(downloadedContent: String) =
        super.convertCodeDescriptionContent(
            contentExtractionRegex.find(downloadedContent)?.groups?.get(1)?.value ?: downloadedContent
        )
}


class FtpCodeDescriptionProvider : SinglePageCodeDescriptionProvider(
    id = "ftp",
    product = CodeDescriptionProvider.Product("Common", "FTP", "any"),
    indexUrl = Url(INDEX_URL)
) {
    private companion object {
        private const val DISPLAY_URL = "https://en.wikipedia.org/wiki/List_of_FTP_server_return_codes"
        private const val INDEX_URL =
            "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_FTP_server_return_codes"
    }

    override val indexUrl = Url(INDEX_URL)
    override val codeDescriptionRegex =
        Regex("<tr>\\s*<td>\\s*<code>(\\d+)</code>\\s*</td>\\s*<td>((.|\\s)*?)</td>\\s*</tr>")

    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val code = matchResult.groups[1]?.value ?: "NO CODE"
        val description = matchResult.groups[2]?.value ?: "NO DESCRIPTION"
        return CodeDescriptionLocation(
            provider = this,
            code = code,
            content = CodeDescription(content = createContentString("Code" to code, "Description" to description)),
            url = Url(DISPLAY_URL)
        )
    }
}

