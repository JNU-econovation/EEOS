package com.example.eeos.di

import com.example.eeos.data.repository.AuthRepositoryImpl
import com.example.eeos.data.repository.InfoRepositoryImpl
import com.example.eeos.data.repository.ProgramRepositoryImpl
import com.example.eeos.domain.repository.AuthRepository
import com.example.eeos.domain.repository.InfoRepository
import com.example.eeos.domain.repository.ProgramRepository
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

/**
* 인터페이스 레포지토리와 구현체 레포지토리 결합
* */

@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {
    @Singleton
    @Binds
    abstract fun bindAuthRepository(
        authRepository: AuthRepositoryImpl
    ): AuthRepository

    @Singleton
    @Binds
    abstract fun bindsInfoRepository(
        infoRepository: InfoRepositoryImpl
    ): InfoRepository

    @Singleton
    @Binds
    abstract fun bindsProgramRepository(
        programRepository: ProgramRepositoryImpl
    ): ProgramRepository
}
