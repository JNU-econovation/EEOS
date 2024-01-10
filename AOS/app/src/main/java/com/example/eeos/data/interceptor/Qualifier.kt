package com.example.eeos.data.interceptor

import javax.inject.Qualifier

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class Reissue

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class Header

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class Logging
