package org.olafneumann.errorcodes.html.browser

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.PopStateEvent
import org.w3c.dom.url.URL

class StateContainer<T: StateContainer.State>(
    private val transformer: StateHandler<T>
) {
    init {
        window.addEventListener(EVENT_POPSTATE, {
            if (it is PopStateEvent) {
                handle(it)
            }
        })
    }

    fun push(state: T) {
        val hash = transformer.toHash(state)
        window.history.pushState(state, hash.display, "#${encodeURIComponent(hash.hash)}")
    }

    fun getSelectedState(): T? {
        val url = URL(document.URL)
        if (url.hash.length > 1) {
            val hash = decodeURIComponent(url.hash.substring(1))
            return transformer.fromHash(hash)
        }
        return null
    }

    private fun handle(event: PopStateEvent) {
        if (event.state == null) {
            console.log("State popped with no state attached.")
            return
        }
        if (event.state !is State) {
            console.log("Popped state is not if expected 'State' type.", event.state)
            return
        }

        // TODO better cast handling
        val state: T = event.state as State as T
        transformer.handle(state)
    }

    private companion object {
        private const val EVENT_POPSTATE = "popstate"
    }

    interface State {
    }

    interface StateHandler<T> {
        fun toHash(state: T): HashContainer
        fun fromHash(hash: String): T
        fun handle(state: T)
    }

    data class HashContainer(
        val hash: String,
        val display: String
    )
}