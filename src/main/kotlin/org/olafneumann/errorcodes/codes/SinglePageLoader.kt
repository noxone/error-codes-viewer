package org.olafneumann.errorcodes.codes

import io.ktor.http.Url

class HttpCodeDescriptionProvider : AbstractUrlCodeDescriptionProvider(
    id = "http",
    product = CodeDescriptionProvider.Product("WWW", "HTTP", "1.1")
) {
    private companion object {
        private const val INDEX_URL = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    }

    override val indexUrl = Url(INDEX_URL)
    override val codeDescriptionRegex =
        Regex("<dt><a\\s[^>]*?href=\"([^\"]+)\"[^>]+><code>([0-9]+)\\s+([^<]+)</code></a>( \\()?(?:.|\\s)*?<dd>(.+?)</dd>")

    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val link = matchResult.groups[1]?.value ?: "NO HREF"
        val code = matchResult.groups[2]?.value ?: "NO CODE"
        val summary = matchResult.groups[3]?.value ?: "NO SUMMARY"
        val description = matchResult.groups[5]?.value ?: "NO DESCRIPTION"
        val linkAvailable = matchResult.groups[4] == null
        val url = if (linkAvailable) Url("https://developer.mozilla.org${link}") else null
        return CodeDescriptionLocation(
            provider = this,
            code = code,
            summary = summary,
            content = if (!linkAvailable) CodeDescription(
                content = createContentString(
                    code,
                    summary,
                    description
                )
            ) else null,
            url = url,
            displayUrl = url
        )
    }

    private fun createContentString(code: String, summary: String, description: String) =
        "<dl>" +
                "<dt>Code<dt><dd>${code}</dd>" +
                "<dt>Summary<dt><dd>${summary}</dd>" +
                "<dt>Description<dt><dd>${HtmlCleaner.stripTagExceptAllowed(description)}</dd>" +
                "</dl>"
}