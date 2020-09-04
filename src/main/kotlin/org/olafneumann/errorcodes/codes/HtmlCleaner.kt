package org.olafneumann.errorcodes.codes

object HtmlCleaner {
    private const val CUSTOM_CLASS = "ec-custom"

    private val ALLOWED_TAGS = listOf(
        // styling
        "b", "i", "u",

        // definitions
        "dd", "dl", "dt",

        // headers
        "h1", "h2", "h3", "h4", "h5", "h6",

        // lists
        "ul", "ol", "li",

        // context
        "abbr", "code", "em", "s", "var", "pre",

        // elements
        "hr", "p", "strike", "strong", "sub", "sup", "wbr",

        // tables
        "table", "td", "th", "tr"
    )

    private val REGEX_TAG = Regex("<(/)?([-a-zA-Z0-9]+)(?:\\s+[-a-zA-Z0-9]+=(?:\"[^\"]*\"|'[^']*'|\\S*))*>")

    fun stripAllTags(html: String): String = html.replace(REGEX_TAG, "")

    fun stripTagsExceptAllowed(html: String, allowedTagNames: List<String> = ALLOWED_TAGS): String {
        val matchResults = REGEX_TAG.findAll(html).toList()
        var changedCode = html
        //val allowedTags = matchResults
        //    .filter { matchResult -> matchResult.groups[2] != null && allowedTagNames.contains(matchResult.groups[2]!!.value) }
        val notAllowedTags = matchResults
            .filter { matchResult -> matchResult.groups[2] == null || !allowedTagNames.contains(matchResult.groups[2]!!.value) }
        notAllowedTags
            .forEach { changedCode = changedCode.replace(it.value, "") }
        return changedCode
    }

}
