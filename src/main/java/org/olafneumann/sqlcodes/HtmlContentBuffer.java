package org.olafneumann.sqlcodes;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;
import java.util.concurrent.ForkJoinPool;

public class HtmlContentBuffer {
	private static final File FILE = new File("sqlcodes.buffer");

	private static final Properties properties = new Properties();

	static {
		try (InputStream in = new BufferedInputStream(new FileInputStream(FILE))) {
			properties.load(in);
		} catch (Exception ignore) {
		}
	}

	private static Properties getProperties() {
		return properties;
	}

	@SuppressWarnings("deprecation")
	private static void saveProperties(Properties properties) {
		ForkJoinPool.commonPool().execute(() -> {
			synchronized (HtmlContentBuffer.class) {
				try (OutputStream out = new BufferedOutputStream(new FileOutputStream(FILE))) {
					properties.save(out, "");
				} catch (Exception ignore) {
					System.out.println(ignore);
				}
			}
		});
	}

	public static String getContent(String code) {
		Properties p = getProperties();
		if (p.containsKey(code)) {
			String content = p.getProperty(code);
			if (content != null && content.length() > 0) {
				return content;
			}
		}
		return null;
	}

	public static void setContent(String code, String content) {
		Properties p = getProperties();
		p.setProperty(String.valueOf(code), content);
		saveProperties(p);
	}
}
