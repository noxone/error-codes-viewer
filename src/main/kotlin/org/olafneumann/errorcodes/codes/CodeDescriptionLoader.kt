package org.olafneumann.errorcodes.codes

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

object CodeDescriptionLoader {
    private val codeDescriptionProviders = listOf<CodeDescriptionProvider>(Db2ZosCodeDescriptionProvider(), MQCodeDescriptionProvider())
    private var codeDescriptionLocations: Map<String, List<CodeDescriptionLocation>> = codeDescriptionProviders
        .map { it.name to emptyList<CodeDescriptionLocation>() }
        .toMap()

    init {
        GlobalScope.launch {
            loadCodes()
        }
    }

    private suspend fun loadCodes() {
        codeDescriptionLocations = codeDescriptionProviders
            .map { it.name to it.loadLocationList().sortedWith(it.comparator) }
            .toMap()
        console.log(codeDescriptionLocations)
    }

    fun getLocations() = codeDescriptionLocations
}