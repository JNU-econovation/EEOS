package com.example.eeos.data.interceptor

import com.example.eeos.EEOSApplication
import okhttp3.Interceptor
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import org.json.JSONObject

class AddHeaderInterceptor : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val originalRequest = chain.request()
        val authRequest = originalRequest.newBuilder()

        authRequest.addHeader(
            "Authorization",
            ("Bearer " + EEOSApplication.prefs.access)
        )

        val request = authRequest.build()
        val response = chain.proceed(request)

        if (response.code == 401) {
            return reIssueToken(chain, originalRequest, originalRequest.newBuilder().build())
        }

        return response
    }

    private fun reIssueToken(
        chain: Interceptor.Chain,
        originalRequest: Request,
        authRequest: Request
    ): Response {
        val refreshToken = EEOSApplication.prefs.refresh
        if (refreshToken != null) {
            val reIssueRequest = originalRequest.newBuilder()
                .post("".toRequestBody())
                .url("https://eeos.store/api/auth/reissue")
                .addHeader("Cookie", refreshToken)
                .build()
            val reIssueResponse = chain.proceed(reIssueRequest)

            if (reIssueResponse.isSuccessful) {
                val response = reIssueResponse.body?.string()
                val jsonObject = JSONObject(response)
                val newAccessToken = jsonObject.getString("accessToken")
                EEOSApplication.prefs.access = newAccessToken

                reIssueResponse.close()
                val newRequest = originalRequest.newBuilder().build()

                return chain.proceed(newRequest)
            } else {
                // reIssueResponse Fail
            }
        } else {
            // refreshToken == null
        }

        return chain.proceed(authRequest)
    }
}
