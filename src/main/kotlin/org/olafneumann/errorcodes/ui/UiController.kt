package org.olafneumann.errorcodes.ui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.olafneumann.errorcodes.DisplayContract
import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider
import org.olafneumann.errorcodes.html.HtmlView

class UiController(
    private val codeDescriptionProviders: List<CodeDescriptionProvider>
) : DisplayContract.Controller {
    private val view: DisplayContract.View = HtmlView(this)

    private var selectedCodeDescriptionProvider = codeDescriptionProviders.first()

    init {
        view.showCodeDescriptionProviders(codeDescriptionProviders)
        selectCodeDescriptionProvider(selectedCodeDescriptionProvider)

        view.tryToSelectPreselectedErrorCode()
    }

    override fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider) {
        selectCodeDescriptionProvider(provider) {}
    }

    private fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider, andThen: () -> Unit) {
        selectedCodeDescriptionProvider = provider
        view.selectCodeDescriptionProvider(selectedCodeDescriptionProvider)
        view.showCodeDescription(null)
        view.showCodeDescriptionLocations(null)
        GlobalScope.launch {
            view.selectCodeDescriptionProvider(selectedCodeDescriptionProvider) // if the download takes too long
            view.showCodeDescriptionLocations(selectedCodeDescriptionProvider.loadLocationList())
            andThen.invoke()
        }
    }

    override fun selectCodeDescriptionLocation(location: CodeDescriptionLocation) {
        GlobalScope.launch {
            if (location.forceLoad && location.content == null) {
                location.content = location.provider.loadCodeDescription(location)
            }
            view.showCodeDescription(location)
        }
    }

    override fun selectCodeDescriptionLocation(codeDescriptionProviderId: String, code: String) {
        if (selectedCodeDescriptionProvider.id != codeDescriptionProviderId) {
            codeDescriptionProviders.firstOrNull { it.id == codeDescriptionProviderId }
                ?.let {
                    selectCodeDescriptionProvider(it) { selectCodeDescriptionLocation(codeDescriptionProviderId, code) }
                }
        } else {
            GlobalScope.launch {
                selectedCodeDescriptionProvider.getLocationByCode(code)
                    ?.let { selectCodeDescriptionLocation(it) }
            }
        }
    }
}