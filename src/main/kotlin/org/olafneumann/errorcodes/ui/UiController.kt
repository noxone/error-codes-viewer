package org.olafneumann.errorcodes.ui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.html.HtmlView

class UiController(
        codeDescriptionProviders: List<CodeDescriptionProvider>
) : DisplayContract.Controller {
    private val view: DisplayContract.View = HtmlView(this)

    init {
        view.showCodeDescriptionProviders(codeDescriptionProviders)
        selectCodeDescriptionProvider(codeDescriptionProviders.first())
    }

    override fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider) {
        // TODO show loading state
        view.selectCodeDescriptionProvider(provider)
        view.setContent(null)
        GlobalScope.launch {
            view.showCodeDescriptionLocations(provider, provider.loadLocationList())
        }
    }

    override fun selectCodeDescriptionLocation(location: CodeDescriptionLocation) {
        view.selectCodeDescriptionLocation(location)
        /*GlobalScope.launch {
            val description = location.provider.loadCodeDescription(location)
            view.setContent(location, description.content)
        }*/
        view.setContent(location)
    }
}