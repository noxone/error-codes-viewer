package org.olafneumann.errorcodes.codes

import io.ktor.client.HttpClient
import io.ktor.client.engine.js.Js
import io.ktor.client.request.get
import io.ktor.http.Url
import kotlin.js.Date
import kotlin.math.absoluteValue

abstract class AbstractUrlCodeDescriptionProvider(
        override val producer: String,
        override val title: String,
        override val version: String
) : CodeDescriptionProvider {
    private val client = HttpClient(Js)

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

class Db2ZosCodeDescriptionProvider : AbstractUrlCodeDescriptionProvider("IBM", "Db2 for z/OS", "10.0.0") {
    override val indexUrl =
        Url("https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed")
    override val codeDescriptionRegex =
        Regex("<span class=\"ulchildlinktext\"><a [^>]*href=\"([^\"]+)\"[^>]*>(-[0-9]+)</a>")

    private val detailBaseUrlString = "https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/"

    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val href = matchResult.groups[1]?.value ?: "NO HREF"
        val text = matchResult.groups[2]?.value ?: "NO TEXT"
        return CodeDescriptionLocation(
            provider = this,
            code = text,
            url = Url("$detailBaseUrlString$href?view=embed")
        )
    }

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> a.code.toInt().absoluteValue.compareTo(b.code.toInt().absoluteValue) }
}


class MQCodeDescriptionProvider : AbstractUrlCodeDescriptionProvider("IBM", "MQ", "8.0.0") {
    override val indexUrl =
        Url("https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/q040710_.htm?view=embed")
    override val codeDescriptionRegex =
        Regex("<li class=\"ulchildlink\".*?<a href=\"([^\"]+)\"[^>]*>([0-9]+)[^<]*</a")

    private val detailBaseUrlString = "https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/"

    override fun convertMatchToCodeDescriptionLocation(matchResult: MatchResult): CodeDescriptionLocation {
        val href = matchResult.groups[1]?.value ?: "NO HREF"
        val text = matchResult.groups[2]?.value ?: "NO TEXT"
        return CodeDescriptionLocation(
            provider = this,
            code = text,
            url = Url("$detailBaseUrlString$href?view=embed")
        )
    }

    override val comparator: Comparator<CodeDescriptionLocation> =
        Comparator { a, b -> a.code.toInt().absoluteValue.compareTo(b.code.toInt().absoluteValue) }
}