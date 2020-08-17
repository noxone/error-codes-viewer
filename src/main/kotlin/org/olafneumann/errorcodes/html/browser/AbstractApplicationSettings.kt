package org.olafneumann.errorcodes.html.browser

import kotlinx.browser.localStorage
import kotlin.collections.forEach
import kotlin.collections.mutableMapOf
import kotlin.collections.set

internal abstract class AbstractApplicationSettings() {
    companion object {
        private const val KEY_CONSENT = "consent"
    }


    // a map to store settings temporarily while the user did not consent
    private val intermediate = mutableMapOf<String, String>()
    private fun persistIntermediate() {
        // a simple set will do, because now set() will actually write to localStorage
        intermediate.forEach { set(it.key, it.value) }
        intermediate.clear()

    }

    private fun loadIntermediateFromLocalStorage() {
        for (i in 0 until localStorage.length) {
            localStorage.key(i)?.let { key -> localStorage.getItem(key)?.let { intermediate[key] = it } }
        }
    }

    // Hiding local storage behind functions so we can disable storage if user does not consent
    protected fun get(key: String) = intermediate[key] ?: localStorage.getItem(key)
    protected fun set(key: String, value: String) {
        if (hasUserConsent) {
            localStorage.setItem(key, value)
        } else {
            intermediate[key] = value
        }
    }
    protected fun listKeys(): Sequence<String> =
            if (hasUserConsent) {
                localStorage.length.downTo(0).asSequence().mapNotNull { localStorage.key(it) }
            } else {
                intermediate.keys.asSequence()
            }

    protected fun set(key: String, value: Int) = set(key, value.toString())
    protected fun set(key: String, value: Boolean) = set(key, value.toString())
    protected fun set(key: String, value: Any) = set(key, value.toJSON())
    protected fun <T> getAny(key: String) = get(key)?.toAny<T>()


    private fun Any.toJSON() = JSON.stringify(this)
    private fun <T> String.toAny() = JSON.parse<T>(this)

    // store the info whether the user allows storing cookies or not
    var hasUserConsent: Boolean
        get() = get(KEY_CONSENT)?.toBoolean() ?: false
        set(value) {
            set(KEY_CONSENT, value)
            if (value) {
                persistIntermediate()
            } else {
                loadIntermediateFromLocalStorage()
            }
        }

    init {
        if (!hasUserConsent) {
            loadIntermediateFromLocalStorage()
            localStorage.clear()
        }
    }
}
