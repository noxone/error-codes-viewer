package org.olafneumann.sqlcodes;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.MessageFormat;
import java.util.Collections;
import java.util.Map;
import java.util.TreeMap;
import java.util.function.DoubleConsumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HtmlContentRetriever {
	private final String pre;

	private final String webSources;
	private final int pages;
	private final String webPageBase;
	private final String webPagePrefix;
	private final String webPagePostfix;

	private final Pattern pattern;
	private final MessageFormat format;

	HtmlContentRetriever(String pre,
			String webSources,
			int pages,
			String webPageBase,
			String webPagePrefix,
			String webPagePostfix,
			Pattern pattern,
			MessageFormat format) {
		this.pre = pre.endsWith(".") ? pre : pre + ".";
		this.webSources = webSources;
		this.pages = pages;
		this.webPageBase = webPageBase;
		this.webPagePrefix = webPagePrefix;
		this.webPagePostfix = webPagePostfix;
		this.pattern = pattern;
		this.format = format;
	}

	private String getUrl(String code) {
		String url = codes.get(code);
		if (url == null) {
			String n = code.substring(0, code.length() - 1);
			String c = code.substring(code.length() - 1).toLowerCase();
			return format.format(new Object[] { webPageBase, webPagePrefix, Math.abs(Integer.parseInt(n)), c, webPagePostfix });
		} else {
			return webPageBase + webPagePrefix + url + webPagePostfix;
		}
	}

	public String getContent(String code) throws IOException {
		return get(code, () -> read(getUrl(code)));
	}

	public String getExternalUrl(String relative) {
		return webPageBase + relative;
	}

	private Map<String, String> codes = null;

	public synchronized Map<String, String> getAvailableCodes(DoubleConsumer listener) {
		Map<String, String> codes = new TreeMap<>();
		for (int i = 0; i < pages; ++i) {
			codes.putAll(getCodes(webSources.replace("{}", String.valueOf(i + 1))));
			listener.accept(i / (double) pages);
		}
		return this.codes = codes;
	}

	private Map<String, String> getCodes(String path) {
		try {
			String content = get(path, () -> read(path));
			Matcher matcher = pattern.matcher(content);
			Map<String, String> codes = new TreeMap<>();
			while (matcher.find()) {
				if (matcher.groupCount() == 1) {
					codes.put(matcher.group(1), null);
				} else {
					codes.put(matcher.group(2), matcher.group(1));
				}
			}
			return codes;
		} catch (IOException e) {
			e.printStackTrace();
			return Collections.emptyMap();
		}
	}

	private String get(String key, IoSupplier<String> supplier) throws IOException {
		String content = HtmlContentBuffer.getContent(pre + key);
		if (content != null)
			return content;
		content = supplier.get();
		if (content != null && content.trim().length() > 0)
			HtmlContentBuffer.setContent(pre + key, content);
		return content;
	}

	private String read(String path) throws IOException {
		System.out.println(path);
		boolean ok = false;
		IOException ex = null;
		for (int i = 0; !ok && i < 10; ++i) {
			try {
				URL url = new URL(path);
				String out = read(url);
				out = out.replace(
					"<head>",
					"<head><base href=\"" + url.getProtocol() + "://" + url.getHost() + url.getPath() + "\"/>");
				ok = true;
				return out;
			} catch (IOException e) {
				if (ex != null) {
					ex = e;
				}
			}
		}
		throw ex;
	}

	private String read(URL url) throws IOException {
		//		Proxy proxy = new Proxy(
		//			Proxy.Type.HTTP,
		//			new InetSocketAddress("ipv4.194.9.141.15.webdefence.global.blackspider.com", 8081));
		try (InputStream in = new BufferedInputStream(url.openConnection(/* proxy */).getInputStream())) {
			ByteArrayOutputStream bos = new ByteArrayOutputStream();
			copy(in, bos);
			return new String(bos.toByteArray(), Charset.forName("UTF-8"));
		}
	}

	private void copy(InputStream in, OutputStream out) throws IOException {
		byte[] buffer = new byte[1024 * 8];
		int len;
		while ((len = in.read(buffer)) != -1) {
			out.write(buffer, 0, len);
		}
	}

}
