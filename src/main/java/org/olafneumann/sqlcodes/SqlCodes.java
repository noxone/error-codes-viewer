package org.olafneumann.sqlcodes;

import java.net.ProxySelector;

import org.olafneumann.sqlcodes.ui.SqlCodesWindow;

import javafx.application.Application;
import javafx.stage.Stage;

public class SqlCodes extends Application {
	static {
		ProxySelector.setDefault(ProxySelector.getDefault());
		System.setProperty("java.net.useSystemProxies", "true");
		System.setProperty("http.proxyHost", "ipv4.194.9.141.15.webdefence.global.blackspider.com");
		System.setProperty("http.proxyPort", "8081");
	}

	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage stage) throws Exception {
		SqlCodesWindow.show(stage);
	}
}
