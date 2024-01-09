package com.example.eeos.di

import com.example.eeos.EEOSApplication
import com.google.gson.GsonBuilder
import com.skydoves.sandwich.adapters.ApiResponseCallAdapterFactory
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Response
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

@Module
@InstallIn(SingletonComponent::class)
object RetrofitModule {
    private const val MOCK_URL = "https://562ee14c-9738-4e79-ba16-f8d78480a890.mock.pstmn.io/api/"
    private const val BE_DEV_URL = "https://dev.eeos.store/api/"
    private var gson = GsonBuilder().setLenient().create()

    @Provides
    @Singleton
    fun provideOkHttpClient(): OkHttpClient = OkHttpClient.Builder()
        .addInterceptor(
            HttpLoggingInterceptor().apply {
                level = HttpLoggingInterceptor.Level.BODY
            }
        )
        .addInterceptor(AuthInterceptor())
        .addInterceptor(GetRefreshInterceptor())
        .build()

    @Provides
    @Singleton
    fun provideRetrofit(
        client: OkHttpClient,
    ): Retrofit = Retrofit.Builder()
        .baseUrl(BE_DEV_URL)
        .client(client)
        .addCallAdapterFactory(ApiResponseCallAdapterFactory.create()) // Here!
        .addConverterFactory(GsonConverterFactory.create(gson))
        .build()
}

class AuthInterceptor : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val originalRequest = chain.request()
        val authRequest = originalRequest.newBuilder()

        authRequest.addHeader(
            "Authorization",
            ("Bearer " + EEOSApplication.prefs.access)
        )

        val req = authRequest.build()
        return chain.proceed(req)
    }
}

class GetRefreshInterceptor : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val originalResponse = chain.proceed(chain.request())
        val refreshToken = originalResponse.header("Set-Cookie")

        EEOSApplication.prefs.refresh = refreshToken

        return originalResponse
    }
}
