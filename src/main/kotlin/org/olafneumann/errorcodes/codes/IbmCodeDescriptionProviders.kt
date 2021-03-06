package org.olafneumann.errorcodes.codes

import io.ktor.http.Url
import kotlin.math.absoluteValue

abstract class AbstractIbmUrlCodeDescriptionProvider(
    override val id: String,
    product: String,
    version: String,
    override val indexUrl: Url,
    override val codeDescriptionRegex: Regex,
    val detailBaseUrlString: String,
    val contentUrlAddition: String = "?view=embed"
) : AbstractUrlCodeDescriptionProvider(
    id,
    CodeDescriptionProvider.Product("IBM", product, version)
) {
    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val href = matchResult.groups[1]?.value ?: "NO HREF"
        val text = matchResult.groups[2]?.value ?: "NO TEXT"
        val summaryHtml = matchResult.groups[3]?.value
        return CodeDescriptionLocation(
            provider = this,
            code = text,
            summary = editSummary(summaryHtml),
            url = Url("${detailBaseUrlString}${href}${contentUrlAddition}"),
            displayUrl = Url("${detailBaseUrlString}${href}")
        )
    }

    protected open fun editSummary(rawSummary: String?) = rawSummary?.replace(Regex("<[^>]+>"), "")
        ?.trim()
        ?.toLowerCase()
        ?.splitToSequence(' ')
        ?.map { if (it.length > 3) it.capitalize() else it }
        ?.joinToString(" ")
        ?.capitalize()

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> a.code.toInt().absoluteValue.compareTo(b.code.toInt().absoluteValue) }

    companion object {
        internal val REGEX_UNDERSCORE = Regex("^MQRC_|_")
        internal val REGEX_Q = Regex("\\b[q]\\b")
        internal val REGEX_Q_MGR = Regex("\\bQ\\s+mgr\\b")
        internal val REGEX_MSG = Regex("\\b[Mm]sg\\b")
        internal val REGEX_SQL = Regex("\\b[Ss][Qq][Ll]\\b")
    }
}

abstract class SqlCodeDescriptionProvider(
    id: String,
    product: String,
    version: String,
    indexUrl: Url,
    codeDescriptionRegex: Regex,
    detailBaseUrlString: String,
    contentUrlAddition: String = "?view=embed"
) : AbstractIbmUrlCodeDescriptionProvider(
    id, product, version, indexUrl, codeDescriptionRegex, detailBaseUrlString, contentUrlAddition
) {
    override fun editSummary(rawSummary: String?): String? =
        super.editSummary(rawSummary)?.replace(REGEX_SQL, "SQL")
}

class Db2Zos10CodeDescriptionProvider : SqlCodeDescriptionProvider(
    "ibm-db2-for-zos-10",
    "Db2 for z/OS",
    "10.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<li class=\"ulchildlink\"[^>]*>.*?<a\\s[^>]*href=\"([^\"]+)\"[^>]*>(-?[0-9]+)</a>((?:[^<]|<(?!/li))*?)</li>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/"
)

class Db2Zos11CodeDescriptionProvider : SqlCodeDescriptionProvider(
    "ibm-db2-for-zos-11",
    "Db2 for z/OS",
    "11.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<li class=\"ulchildlink\"[^>]*>.*?<a\\s[^>]*href=\"([^\"]+)\"[^>]*>(-?[0-9]+)</a>((?:[^<]|<(?!/li))*?)</li>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/"
)

class Db2Zos12CodeDescriptionProvider : SqlCodeDescriptionProvider(
    "ibm-db2-for-zos-12",
    "Db2 for z/OS",
    "12.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<li class=\"ulchildlink\"[^>]*>.*?<a\\s[^>]*href=\"([^\"]+)\"[^>]*>(-?[0-9]+)</a>((?:[^<]|<(?!/li))*?)</li>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/"
)

class MQ8CodeDescriptionProvider : AbstractIbmUrlCodeDescriptionProvider(
    "ibm-mq-8",
    "MQ",
    "8.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/q040710_.htm?view=embed"),
    Regex("<li class=\"ulchildlink\"[^>]*>.*?<a\\s[^>]*href=\"([^\"]+)\"[^>]*>(-?[0-9]+)[^:]*: ([^<]*)</a>"),
    "https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/"
) {
    override fun editSummary(rawSummary: String?): String? =
        super.editSummary(rawSummary?.replace(REGEX_UNDERSCORE, " "))
            ?.replace(REGEX_Q, "Q")
            ?.replace(REGEX_Q_MGR, "Q-Manager")
            ?.replace(REGEX_MSG, "Message")
}
