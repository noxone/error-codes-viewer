package org.olafneumann.errorcodes.html.browser

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.PopStateEvent
import org.w3c.dom.url.URL

class StateContainer<T : StateContainer.State>(
    private val transformer: StateHandler<T>,
    private val comparator: Comparator<Any> = Comparator { _, _ -> 1 }
) {
    init {
        window.addEventListener(EVENT_POPSTATE, {
            if (it is PopStateEvent) {
                handle(it)
            }
        })
    }

    fun setState(state: T) {
        val hash = transformer.toHash(state)
        if (window.history.state?.let { comparator.compare(it, state) } != 0) {
            window.history.pushState(state, hash.display, "#${hash.hash}")
        }
    }

    fun cleanState() {
        window.history.pushState(null, document.title, window.location.pathname)
    }

    fun getSelectedState(): T? {
        val url = URL(document.URL)
        if (url.hash.length > 1) {
            val hash = url.hash.substring(1)
            return transformer.fromHash(hash)
        }
        return null
    }

    private fun handle(event: PopStateEvent) {
        if (event.state == null) {
            console.log("State popped with no state attached.")
            return
        }
        try {
            transformer.handle(event.state!!)
        } catch (e: ClassCastException) {
            console.log(e)
        }
    }

    private companion object {
        private const val EVENT_POPSTATE = "popstate"
    }

    interface State {
    }

    interface StateHandler<T> {
        fun toHash(state: T): HashContainer
        fun fromHash(hash: String): T
        fun handle(state: Any)
    }

    data class HashContainer(
        val hash: String,
        val display: String
    )
}