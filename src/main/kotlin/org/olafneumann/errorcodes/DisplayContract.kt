package org.olafneumann.errorcodes

import org.olafneumann.errorcodes.codes.CodeDescriptionLocation
import org.olafneumann.errorcodes.codes.CodeDescriptionProvider

interface DisplayContract {
    interface View {
        fun showCodeDescriptionProviders(providers: List<CodeDescriptionProvider>)
        fun showCodeDescriptionLocations(provider: CodeDescriptionProvider, locations: List<CodeDescriptionLocation>)
        fun setContent(content: String)
    }
    interface Controller {
        fun selectCodeDescriptionProvider(provider: CodeDescriptionProvider)
        fun selectCodeDescriptionLocation(location: CodeDescriptionLocation)
    }
}