package org.olafneumann.sqlcodes;

import java.text.MessageFormat;
import java.util.regex.Pattern;

public enum ErrorCodeType {
	DB2_ZOS("DB2 (z/OS)",
		1,
		"https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed"//
		,
		1,
		"https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/"//
		,
		"n"//
		,
		".html?view=embed"//
		,
		Pattern.compile("<span class=\"ulchildlinktext\"><a [^>]*>(-[0-9]+)</a>")//
		,
		new MessageFormat("{0}{1}{2,number,00}{3}{4}")),
	DB2_LUW("DB2 (LUW)",
		4,
		"http://www.ibm.com/support/knowledgecenter/en/SSEPGG_10.5.0/com.ibm.db2.luw.messages.sql.doc/com.ibm.db2.luw.messages.sql.doc-gentopic{}.html?view=embed"//
		,
		28,
		"http://www.ibm.com/support/knowledgecenter/en/SSEPGG_10.5.0/com.ibm.db2.luw.messages.sql.doc/doc/"//
		,
		"msql"//
		,
		".html?view=embed"//
		,
		Pattern.compile("<span class=\"ulchildlinktext\"><a [^>]*>SQL([0-9]+[A-Z])</a")//
		,
		new MessageFormat("{0}{1}{2,number,00000}{3}{4}")),
	MQ("MQ", 1, "http://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.0.1/com.ibm.mq.amqzao.doc/fm12040_.htm?view=embed"//
		, 1, "http://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.0.1/com.ibm.mq.amqzao.doc/"//
		, ""//
		, "?view=embed"//
		, Pattern.compile("<span class=\"ulchildlinktext\"><a href=\"([^\"]+)\"[^>]*>([0-9]+)[^<]*</a")//
		, new MessageFormat("{0}{1}{2,number,00000}{3}{4}"));

	public final int codeMinLength;
	private final String name;
	private final HtmlContentRetriever retriever;

	private ErrorCodeType(
			String name,
			int codeMinLength,
			String webSources,
			int pages,
			String webPageBase,
			String webPagePrefix,
			String webPagePostfix,
			Pattern pattern,
			MessageFormat format) {
		this.codeMinLength = codeMinLength;
		this.name = name;
		retriever = new HtmlContentRetriever(
				name(),
				webSources,
				pages,
				webPageBase,
				webPagePrefix,
				webPagePostfix,
				pattern,
				format);
	}

	public String getName() {
		return name;
	}

	public HtmlContentRetriever getRetriever() {
		return retriever;
	}

	@Override
	public String toString() {
		return getName();
	}
}
