package com.example.eeos.data.interceptor

import com.example.eeos.EEOSApplication
import okhttp3.Interceptor
import okhttp3.Response

class GetRefreshInterceptor : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val originalResponse = chain.proceed(chain.request())
        val refreshToken = originalResponse.header("Set-Cookie")

        if (refreshToken != null) {
            EEOSApplication.prefs.refresh = refreshToken
        }
        return originalResponse
    }
}
