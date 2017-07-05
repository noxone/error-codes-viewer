package org.olafneumann.sqlcodes.ui;

import java.awt.Desktop;
import java.net.URI;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ForkJoinPool;
import java.util.stream.Collectors;

import org.olafneumann.sqlcodes.ErrorCodeType;
import org.olafneumann.sqlcodes.HtmlContentRetriever;
import org.olafneumann.sqlcodes.ui.Utils.EventType;

import javafx.application.Platform;
import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.ListView;
import javafx.scene.control.ProgressBar;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;

public class SqlCodesWindow extends AbstractWindowController {
	public static void show(Stage stage) {
		SqlCodesWindow controller = load(SqlCodesWindow.class, stage);
		controller.getStage().setTitle("SQL Code Browser");
		controller.show();
	}

	@FXML
	private ProgressBar pgbProgress;
	@FXML
	private Pane pnlLoader;
	@FXML
	private TextField txtSearch;
	@FXML
	private ListView<String> lstCodes;
	@FXML
	private ChoiceBox<ErrorCodeType> chbType;
	@FXML
	private WebView webView;
	private WebEngine engine;
	
	private ErrorCodeType getType() {
		return chbType.getSelectionModel().getSelectedItem();
	}

	private HtmlContentRetriever getHtmlContentRetriever() {
		return getType().getRetriever();
	}

	@Override
	protected void onShowing(WindowEvent event) {
		chbType.setItems(FXCollections.observableArrayList(ErrorCodeType.values()));
		chbType.getSelectionModel().select(ErrorCodeType.SQL);
		chbType.getSelectionModel().selectedItemProperty().addListener((v, o, n) -> {
			fetchCodes();
			txtSearch.setText("");
		});

		engine = webView.getEngine();

		Utils.registerHyperlinkListener(webView, EventType.Click, href -> {
			System.out.println(href);
			if (Desktop.isDesktopSupported()) {
				try {
					Desktop.getDesktop().browse(new URI(getHtmlContentRetriever().getExternalUrl(href)));
				} catch (Exception ignore) {
					ignore.printStackTrace();
				}
			}
		});

		lstCodes.getSelectionModel().selectedItemProperty().addListener((v, o, n) -> {
			if (n != null) {
				try {
					String content = getHtmlContentRetriever().getContent(n);
					engine.loadContent(content);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});

		txtSearch.setOnAction(e -> txtSearch.selectAll());
		txtSearch.setOnKeyReleased(e -> {
			String text = txtSearch.getText();
			if (text.startsWith("-"))
				text = text.substring(1);
			while (text.length() < getType().codeMinLength)
				text = "0" + text;
			String tx = text;
			List<String> list = lstCodes.getItems().stream().filter(t -> t.startsWith(tx)).collect(Collectors.toList());
			if (list.size() == 1)
				lstCodes.getSelectionModel().select(list.get(0));
		});
	}

	@Override
	protected void onShown(WindowEvent event) {
		fetchCodes();
	}

	private void fetchCodes() {
		pnlLoader.setVisible(true);
		ForkJoinPool.commonPool().execute(() -> {
			Collection<String> codes = getHtmlContentRetriever()
				.getAvailableCodes(d -> Platform.runLater(() -> pgbProgress.setProgress(d))).keySet();
			Platform.runLater(() -> {
				lstCodes.setItems(FXCollections.observableArrayList(codes));
				pnlLoader.setVisible(false);
				txtSearch.requestFocus();
			});
		});
		txtSearch.requestFocus();
	}

}
