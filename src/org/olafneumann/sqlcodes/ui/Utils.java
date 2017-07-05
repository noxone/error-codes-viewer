package org.olafneumann.sqlcodes.ui;

import java.util.function.Consumer;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.events.Event;
import org.w3c.dom.events.EventListener;
import org.w3c.dom.events.EventTarget;

import javafx.concurrent.Worker;
import javafx.scene.web.WebView;

class Utils {
	static enum EventType {
		Click("click"),
		MouseOver("mouseover"),
		MouseOut("mouseclick");

		private final String type;

		private EventType(String type) {
			this.type = type;
		}
	}

	static void registerHyperlinkListener(WebView webView, EventType type, Consumer<String> hrefHandler) {
		webView.getEngine().getLoadWorker().stateProperty().addListener((v, o, n) -> {
			if (n == Worker.State.SUCCEEDED) {
				EventListener listener = new EventListener() {
					@Override
					public void handleEvent(Event ev) {
						String domEventType = ev.getType();
						//System.err.println("EventType: " + domEventType);
						if (domEventType.equals(type.type)) {
							String href = ((Element) ev.getTarget()).getAttribute("href");
							hrefHandler.accept(href);
						}
					}
				};

				Document doc = webView.getEngine().getDocument();
				NodeList nodeList = doc.getElementsByTagName("a");
				for (int i = 0; i < nodeList.getLength(); i++) {
					((EventTarget) nodeList.item(i)).addEventListener(type.type, listener, false);
				}
			}
		});
	}
}
