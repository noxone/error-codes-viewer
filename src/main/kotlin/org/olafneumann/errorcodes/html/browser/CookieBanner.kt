package org.olafneumann.errorcodes.html.browser

import org.olafneumann.errorcodes.ApplicationSettings
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement

internal object CookieBanner {
    private const val ID_DIV_COOKIE = "ck_container_cookie"
    private const val ID_BTN_ACCEPT = "ck_btn_accept"
    private const val ID_BTN_REJECT = "ck_btn_reject"

    private val ctnCookie: HTMLDivElement = HtmlHelper.getElementById(ID_DIV_COOKIE)

    fun initialize() {
        if (ApplicationSettings.hasUserConsent) {
            hideBanner()
        } else {
            val btnAccept: HTMLButtonElement = HtmlHelper.getElementById(ID_BTN_ACCEPT)
            val btnReject: HTMLButtonElement = HtmlHelper.getElementById(ID_BTN_REJECT)

            btnAccept.onclick = {
                ApplicationSettings.hasUserConsent = true
                hideBanner()
            }
            btnReject.onclick = { hideBanner() }
        }
    }

    private fun hideBanner() {
        ctnCookie.parentNode?.removeChild(ctnCookie)
    }
}