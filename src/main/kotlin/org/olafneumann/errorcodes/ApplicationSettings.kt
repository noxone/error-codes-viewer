package org.olafneumann.errorcodes

import org.olafneumann.errorcodes.html.browser.AbstractApplicationSettings

internal object ApplicationSettings : AbstractApplicationSettings() {
    private const val KEY_LAST_VERSION = "user.lastVersion"
    private const val KEY_CURRENT_GROUP_NAME = "current.group.name"
    private const val KEY_CURRENT_PREFIX = "current.prefix"
    private const val KEY_CURRENT_SEPARATOR = "current.separator"
    private const val KEY_CURRENT_POSTFIX = "current.postfix"
    private const val KEY_LIST_PREFIXES = "list.prefixes"
    private const val KEY_LIST_SEPARATORS = "list.separators"
    private const val KEY_LIST_POSTFIXES = "list.postfixes"

    private const val VAL_VERSION = 1
    private const val VAL_DEFAULT_GROUP_NAME = ""
    internal const val VAL_DEFAULT_PREFIX = ""
    internal const val VAL_DEFAULT_SEPARATOR = ", "
    internal const val VAL_DEFAULT_POSTFIX = ""
    private const val VAL_DEFAULT_LIST_PREFIXES = "[\"\",\"Today's order: \"]"
    private const val VAL_DEFAULT_LIST_SEPARATOR = "[\", \",\" : \"]"
    private const val VAL_DEFAULT_LIST_POSTFIXES = "[\"\",\".\"]"

    // ----------------------------------
    // actual function to access settings

    fun isNewUser() = get(KEY_LAST_VERSION)?.toIntOrNull() ?: 0 < VAL_VERSION
    fun storeUserLastInfo() = set(
        KEY_LAST_VERSION,
        VAL_VERSION
    )

    private fun <T> readArrayToMutableList(array: dynamic, handler: (dynamic) -> T): MutableList<T> =
        (0 until (array.length ?: 0)).asSequence()
            .map { array[it] }
            .map { handler(it) }
            .toMutableList()

    private fun readConfigFromArray(key: String, defaultJson: String = "[]"): MutableList<String> =
        readArrayToMutableList(JSON.parse(get(key) ?: defaultJson)) { it.toString() }

    var selectedGroupName: String
        get() = get(KEY_CURRENT_GROUP_NAME) ?: VAL_DEFAULT_GROUP_NAME
        set(value) {
            set(KEY_CURRENT_GROUP_NAME, value)
        }

    var currentPrefix: String
        get() = get(KEY_CURRENT_PREFIX) ?: VAL_DEFAULT_PREFIX
        set(value) {
            set(KEY_CURRENT_PREFIX, value)
        }

    var currentSeparator: String
        get() = get(KEY_CURRENT_SEPARATOR) ?: VAL_DEFAULT_SEPARATOR
        set(value) {
            set(KEY_CURRENT_SEPARATOR, value)
        }

    var currentPostfix: String
        get() = get(KEY_CURRENT_POSTFIX) ?: VAL_DEFAULT_POSTFIX
        set(value) {
            set(KEY_CURRENT_POSTFIX, value)
        }

    var prefixes: List<String>
        get() = readConfigFromArray(KEY_LIST_PREFIXES, VAL_DEFAULT_LIST_PREFIXES)
        set(value) {
            set(KEY_LIST_PREFIXES, JSON.stringify(value))
        }

    var separators: List<String>
        get() = readConfigFromArray(KEY_LIST_SEPARATORS, VAL_DEFAULT_LIST_SEPARATOR)
        set(value) {
            set(KEY_LIST_SEPARATORS, JSON.stringify(value))
        }

    var postfixes: List<String>
        get() = readConfigFromArray(KEY_LIST_POSTFIXES, VAL_DEFAULT_LIST_POSTFIXES)
        set(value) {
            set(KEY_LIST_POSTFIXES, JSON.stringify(value))
        }
}