package org.olafneumann.sqlcodes;

import java.text.MessageFormat;
import java.util.regex.Pattern;

public enum ErrorCodeType {
	SQL(4, "http://www.ibm.com/support/knowledgecenter/en/SSEPGG_10.5.0/com.ibm.db2.luw.messages.sql.doc/com.ibm.db2.luw.messages.sql.doc-gentopic{}.html?view=embed"//
		,28
			, "http://www.ibm.com/support/knowledgecenter/en/SSEPGG_10.5.0/com.ibm.db2.luw.messages.sql.doc/doc/"//
			, "msql"//
			, ".html?view=embed"//
			, Pattern.compile("<span class=\"ulchildlinktext\"><a [^>]*>SQL([0-9]+[A-Z])</a")//
			//, Pattern.compile("<span class=\"ulchildlinktext\"><a href=\"([^\"]+)\"[^>]*>SQL([0-9]+[A-Z])</a")//
			, new MessageFormat("{0}{1}{2,number,00000}{3}{4}")),
	MQ(1, "http://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.0.1/com.ibm.mq.amqzao.doc/fm12040_.htm?view=embed"//
		,1
			, "http://www.ibm.com/support/knowledgecenter/en/SSFKSJ_7.0.1/com.ibm.mq.amqzao.doc/"//
			, ""//
			, "?view=embed"//
			, Pattern.compile("<span class=\"ulchildlinktext\"><a href=\"([^\"]+)\"[^>]*>([0-9]+)[^<]*</a")//
			, new MessageFormat("{0}{1}{2,number,00000}{3}{4}"));

	private final HtmlContentRetriever retriever;
	public final int codeMinLength;

	private ErrorCodeType(int codeMinLength,
			String webSources,
			int pages,
			String webPageBase,
			String webPagePrefix,
			String webPagePostfix,
			Pattern pattern,
			MessageFormat format) {
		this.codeMinLength = codeMinLength;
		retriever = new HtmlContentRetriever(name(), webSources,pages, webPageBase, webPagePrefix, webPagePostfix, pattern, format);
	}

	public HtmlContentRetriever getRetriever() {
		return retriever;
	}
}
