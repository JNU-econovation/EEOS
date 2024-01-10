package com.example.eeos.di

import com.example.eeos.data.interceptor.AddHeaderInterceptor
import com.example.eeos.data.interceptor.GetRefreshInterceptor
import com.example.eeos.data.interceptor.Header
import com.example.eeos.data.interceptor.Logging
import com.example.eeos.data.interceptor.Reissue
import com.skydoves.sandwich.adapters.ApiResponseCallAdapterFactory
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Converter
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

@Module
@InstallIn(SingletonComponent::class)
object RetrofitModule {
    private const val MOCK_URL = "https://562ee14c-9738-4e79-ba16-f8d78480a890.mock.pstmn.io/api/"
    private const val BE_DEV_URL = "https://dev.eeos.store/api/"

    @Provides
    @Singleton
    @Header
    fun provideAddHeaderInterceptor(): Interceptor = AddHeaderInterceptor()

    @Provides
    @Singleton
    @Reissue
    fun provideGetRefreshInterceptor(): Interceptor = GetRefreshInterceptor()

    @Provides
    @Singleton
    @Logging
    fun provideLoggingInterceptor(): HttpLoggingInterceptor {
        return HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY)
    }

    @Provides
    @Singleton
    fun provideOkHttpClient(
        @Header addHeaderInterceptor: Interceptor,
        @Reissue getRefreshInterceptor: Interceptor,
        @Logging httpLoggingInterceptor: HttpLoggingInterceptor
    ): OkHttpClient = OkHttpClient.Builder()
        .addInterceptor(httpLoggingInterceptor)
        .addInterceptor(addHeaderInterceptor)
        .addInterceptor(getRefreshInterceptor)
        .build()

    @Provides
    @Singleton
    fun provideRetrofit(
        client: OkHttpClient,
        gsonFactory: Converter.Factory
    ): Retrofit = Retrofit.Builder()
        .baseUrl(BE_DEV_URL)
        .client(client)
        .addCallAdapterFactory(ApiResponseCallAdapterFactory.create()) // Here!
        .addConverterFactory(gsonFactory)
        .build()

    @Provides
    @Singleton
    fun provideConverterFactory(): Converter.Factory {
        return GsonConverterFactory.create()
    }
}
