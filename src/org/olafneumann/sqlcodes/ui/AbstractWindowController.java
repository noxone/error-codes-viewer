package org.olafneumann.sqlcodes.ui;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Optional;
import java.util.Properties;
import java.util.function.Function;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextInputDialog;
import javafx.scene.image.Image;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;
import javafx.stage.DirectoryChooser;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import javafx.stage.WindowEvent;

abstract class AbstractWindowController {
	private static String getName(Class<?> clazz) {
		String name = clazz.getSimpleName();
		if (name.toLowerCase().endsWith("controller")) {
			name = name.substring(0, name.length() - "controller".length());
		}
		return name;
	}

	protected static FXMLLoader getLoader(Class<?> controllerClass, String fxmlfile) {
		FXMLLoader loader = new FXMLLoader();
		try (InputStream stream = controllerClass.getResourceAsStream(fxmlfile)) {
			if (stream == null) {
				throw new RuntimeException("Cannot find FXML file: " + fxmlfile);
			}
			loader.load(stream);
		} catch (IOException e) {
			throw new RuntimeException("Unable to load FXML for " + fxmlfile, e);
		}
		return loader;
	}

	protected static <T> T load(Class<T> controllerClass, Stage stage) {
		return load(controllerClass, stage, null);
	}

	protected static <T> T load(Class<T> controllerClass, Stage stage, String iconName) {
		return load(controllerClass, stage, p -> new Scene(p), iconName);
	}

	protected static <T> T load(Class<T> controllerClass, Stage stage, Function<Parent, Scene> createScene,
			String iconName) {
		// Prepare our knowledge about the window
		final String name = getName(controllerClass);

		// Load window information
		FXMLLoader loader = getLoader(controllerClass, name + ".fxml");
		Parent root = loader.getRoot();

		String css = null;
		try (InputStream stream = controllerClass.getResourceAsStream(name + ".css")) {
			if (stream != null) {
				css = controllerClass.getResource(name + ".css").toExternalForm();
			}
		} catch (IOException e) {
			throw new RuntimeException("Unable to load CSS for " + controllerClass.getName(), e);
		}

		// Create and set up the window
		Scene scene = createScene.apply(root);
		if (css != null) {
			scene.getStylesheets().add(css);
		}
		stage.setScene(scene);
		T controller = loader.getController();
		if (controller instanceof AbstractWindowController) {
			AbstractWindowController atc = (AbstractWindowController) controller;
			atc.stage = stage;
			stage.setOnShowing(event -> atc.onShowing(event));
			stage.setOnShown(event -> atc.onShown(event));
			stage.setOnCloseRequest(event -> atc.onCloseRequest(event));
			stage.setOnHiding(event -> atc.onHiding(event));
			stage.setOnHidden(event -> atc.onHidden(event));
		}

		// Maybe make the window beautiful
		if (iconName == null)
			iconName = name;
		for (int size : new int[] { 16, 24, 32, 40, 48, 64, 72, 96, 128 }) {
			InputStream stream = controllerClass.getResourceAsStream("gfx/" + iconName + "_" + size + ".png");
			if (stream != null) {
				stage.getIcons().add(new Image(stream));
			}
		}
		return controller;
	}

	protected static <T> T createWindow(Class<T> controllerClass, Stage owner, String title, StageStyle stageStyle,
			Modality modality) {
		return createWindow(controllerClass, owner, title, stageStyle, modality, null);
	}

	protected static <T> T createWindow(Class<T> controllerClass, Stage owner, String title, StageStyle stageStyle,
			Modality modality, String iconName) {
		Stage stage = new Stage(stageStyle);
		stage.initModality(modality);
		stage.initOwner(owner);
		stage.setTitle(title);
		T controller = load(controllerClass, stage, iconName);
		return controller;
	}

	protected <T> T createWindow(Class<T> controllerClass, String title, StageStyle stageStyle, Modality modality) {
		return createWindow(controllerClass, title, stageStyle, modality, null);
	}

	protected <T> T createWindow(Class<T> controllerClass, String title, StageStyle stageStyle, Modality modality,
			String iconName) {
		return createWindow(controllerClass, getStage(), title, stageStyle, modality, iconName);
	}

	protected Properties getProperties() {
		Properties properties = new Properties();
		try (InputStream stream = getClass().getResourceAsStream(getName(getClass()) + ".properties")) {
			properties.load(stream);
		} catch (IOException ignore) {
		}
		return properties;
	}

	private Stage stage;

	protected Stage getStage() {
		return stage;
	}

	@FXML
	protected void initialize() {
	}

	protected void close() {
		getStage().close();
	}

	protected void show() {
		getStage().show();
	}

	protected void showAndWait() {
		getStage().showAndWait();
	}

	protected void onShowing(WindowEvent event) {
	}

	protected void onShown(WindowEvent event) {
	}

	protected void onCloseRequest(WindowEvent event) {
	}

	protected void onHiding(WindowEvent event) {
	}

	protected void onHidden(WindowEvent event) {
	}

	public static void showMessageBoxOK(String title, String message) {
		showMessageBoxOK(title, null, message);
	}

	public static void showMessageBoxOK(String title, String header, String message) {
		Alert alert = new Alert(AlertType.INFORMATION);
		alert.setTitle(title);
		alert.setHeaderText(header);
		alert.setContentText(message);
		alert.showAndWait();
	}

	public static boolean showMessageBoxYesNo(String text) {
		return showMessageBoxYesNo(null, text);
	}

	public static boolean showMessageBoxYesNo(String header, String text) {
		Alert alert = new Alert(AlertType.CONFIRMATION, text, ButtonType.NO, ButtonType.YES);
		alert.setHeaderText(header);
		return alert.showAndWait().get() == ButtonType.YES;
	}

	public static void showMessageBoxError(String text, Throwable throwable) {
		showMessageBoxError(text, throwable.getLocalizedMessage(), throwable);
	}

	public static void showMessageBoxError(String text, String message, Throwable throwable) {
		Alert alert = new Alert(AlertType.ERROR);
		alert.setTitle("Error");
		alert.setHeaderText(text);
		alert.setContentText(message);

		// Create expandable Exception.
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		if (throwable != null) {
			throwable.printStackTrace(pw);
		}
		String exceptionText = sw.toString();

		Label label = new Label("The stacktrace for this exception:");

		TextArea textArea = new TextArea(exceptionText);
		textArea.setEditable(false);
		textArea.setWrapText(true);

		textArea.setMaxWidth(Double.MAX_VALUE);
		textArea.setMaxHeight(Double.MAX_VALUE);
		GridPane.setVgrow(textArea, Priority.ALWAYS);
		GridPane.setHgrow(textArea, Priority.ALWAYS);

		GridPane expContent = new GridPane();
		expContent.setMaxWidth(Double.MAX_VALUE);
		expContent.add(label, 0, 0);
		expContent.add(textArea, 0, 1);

		// Set expandable Exception into the dialog pane.
		alert.getDialogPane().setExpandableContent(expContent);
		alert.showAndWait();
	}

	public static Optional<String> showMessageBoxInput(String title, String header, String input, String defaultValue) {
		TextInputDialog dialog = new TextInputDialog(defaultValue);
		dialog.setTitle(title);
		dialog.setHeaderText(header);
		dialog.setContentText(input);
		return dialog.showAndWait();
	}

	public Optional<File> showDirectoryChooser(String title, File initPath) {
		DirectoryChooser dc = new DirectoryChooser();
		dc.setTitle(title);
		if (initPath != null && initPath.isDirectory()) {
			dc.setInitialDirectory(initPath);
		}
		return Optional.ofNullable(dc.showDialog(stage));
	}
}
