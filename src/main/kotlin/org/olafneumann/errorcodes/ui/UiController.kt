package org.olafneumann.errorcodes.ui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.codes.Db2ZosCodeDescriptionProvider
import org.olafneumann.errorcodes.codes.MQCodeDescriptionProvider
import org.olafneumann.errorcodes.html.HtmlView

class UiController(
        private val codeDescriptionProviders: List<CodeDescriptionProvider>
) : DisplayContract.Controller {
    private val view: DisplayContract.View = HtmlView(this)

    init {
        view.showCodeDescriptionProviders(codeDescriptionProviders)
    }

    override fun selectCodeDescriptionLocation(location: CodeDescriptionLocation) {
        // TODO("Not yet implemented")
        println("selectCodeDescriptionLocation(${location.code})")

        GlobalScope.launch {
            val description = location.provider.loadCodeDescription(location)
            view.setContent(description.content)
        }
    }

    override fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider) {
        // TODO("Not yet implemented")
        println("selectCodeDescriptionProvider(${provider.name})")

        // TODO show loading state
        GlobalScope.launch {
            view.showCodeDescriptionLocations(provider, provider.loadLocationList())
        }
    }
}