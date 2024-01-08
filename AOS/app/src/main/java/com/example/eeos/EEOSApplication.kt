package com.example.eeos

import android.app.Application
import com.example.eeos.presentation.util.Preference
import dagger.hilt.android.HiltAndroidApp

@HiltAndroidApp
class EEOSApplication : Application() {
    companion object {
        lateinit var prefs: Preference
    }

    override fun onCreate() {
        prefs = Preference(applicationContext)
        super.onCreate()
    }
}
