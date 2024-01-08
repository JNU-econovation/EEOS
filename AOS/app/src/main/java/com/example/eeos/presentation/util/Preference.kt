package com.example.eeos.presentation.util

import android.content.Context
import android.content.Context.MODE_PRIVATE

class Preference(context: Context) {
    private val prefName = "Pref"
    private val prefs = context.getSharedPreferences(prefName, MODE_PRIVATE)

    var access: String?
        get() = prefs.getString("access", null)
        set(value) {
            prefs.edit().putString("access", value).apply()
        }

    var refresh: String?
        get() = prefs.getString("refresh", null)
        set(value) {
            prefs.edit().putString("refresh", value).apply()
        }
}
