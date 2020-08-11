package org.olafneumann.errorcodes.codes

import io.ktor.http.Url
import kotlin.math.absoluteValue

abstract class AbstractIbmUrlCodeDescriptionProvider(
    override val producer: String,
    override val title: String,
    override val version: String,
    override val indexUrl: Url,
    override val codeDescriptionRegex: Regex,
    val detailBaseUrlString: String,
    val contentUrlAddition: String = "?view=embed"
) : AbstractUrlCodeDescriptionProvider(producer, title, version) {
    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val href = matchResult.groups[1]?.value ?: "NO HREF"
        val text = matchResult.groups[2]?.value ?: "NO TEXT"
        return CodeDescriptionLocation(
            provider = this,
            code = text,
            url = Url("${detailBaseUrlString}${href}${contentUrlAddition}"),
            displayUrl = Url("${detailBaseUrlString}${href}")
        )
    }

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> a.code.toInt().absoluteValue.compareTo(b.code.toInt().absoluteValue) }
}

class Db2Zos10CodeDescriptionProvider : AbstractIbmUrlCodeDescriptionProvider(
    "IBM",
    "Db2 for z/OS",
    "10.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<span class=\"ulchildlinktext\"><a\\s[^>]*href=\"([^\"]+)\"[^>]*>(-[0-9]+)</a>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/"
)

class Db2Zos11CodeDescriptionProvider : AbstractIbmUrlCodeDescriptionProvider(
    "IBM",
    "Db2 for z/OS",
    "11.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<li class=\"ulchildlink\".*?><a\\s[^>]*href=\"([^\"]+)\"[^>]*>([^<]+)</a>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/"
)

class Db2Zos12CodeDescriptionProvider : AbstractIbmUrlCodeDescriptionProvider(
    "IBM",
    "Db2 for z/OS",
    "12.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/db2z_n.html?view=embed"),
    Regex("<li class=\"ulchildlink\".*?><a\\s[^>]*href=\"([^\"]+)\"[^>]*>([^<]+)</a>"),
    "https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/"
)

class MQ8CodeDescriptionProvider : AbstractIbmUrlCodeDescriptionProvider(
    "IBM",
    "MQ",
    "8.0.0",
    Url("https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/q040710_.htm?view=embed"),
    Regex("<li class=\"ulchildlink\".*?><a\\s[^>]*href=\"([^\"]+)\"[^>]*>([0-9]+)[^<]*</a"),
    "https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/")
