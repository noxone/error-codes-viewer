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

    fun clean(html: String): String = cleanHtmlElements(stripTagsExceptAllowed(html))

    fun stripTagsExceptAllowed(
        html: String,
        allowedTagNames: List<String> = ALLOWED_TAGS
    ): String {
        var changedHtml = html

        REGEX_TAG.findAll(html) // find all tags
            .filter { !it.containsAllowedTag(allowedTagNames) } // only work on NOT allowed tags
            .forEach { changedHtml = changedHtml.replace(it.value, "") } // remove tags that are not allowed

        return changedHtml
    }

    fun cleanHtmlElements(
        html: String,
        allowedTagNames: List<String> = ALLOWED_TAGS,
        classToAdd: String = CUSTOM_CLASS
    ): String {
        var changedHtml = html

        REGEX_TAG.findAll(html) // find all tags
            .filter { it.groups[1] == null } // ignore closing tags
            .filter { it.containsAllowedTag(allowedTagNames) } // only work on allowed tags
            .forEach { matchResult -> // replace tag by customized tag
                val textToReplace = matchResult.groups[0]!!.value
                val replacement = toCustomizedHtmlTag(matchResult.groups[2]!!.value, classToAdd)
                changedHtml = changedHtml.replace(textToReplace, replacement)
            }

        return changedHtml
    }

    private fun toCustomizedHtmlTag(tagName: String, classToAdd: String) = "<${tagName} class=\"${classToAdd}\">"

    private fun MatchResult.containsAllowedTag(allowedTagNames: List<String>): Boolean =
        groups[2]?.value != null && allowedTagNames.contains(groups[2]!!.value)
}
