package com.example.eeos.di

import com.example.eeos.data.service.InfoService
import com.example.eeos.data.service.ProgramService
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import retrofit2.Retrofit

@Module
@InstallIn(SingletonComponent::class)
object ServiceModule {
    @Provides
    @Singleton
    fun provideInfoService(retrofit: Retrofit): InfoService =
        retrofit.create(InfoService::class.java)

    @Provides
    @Singleton
    fun provideProgramService(retrofit: Retrofit): ProgramService =
        retrofit.create(ProgramService::class.java)
}
