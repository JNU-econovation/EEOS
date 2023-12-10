package com.example.eeos.presentation.util

sealed interface Async<out T> {
    object Loading : Async<Nothing>

    data class Success<T>(
        val data: T
    ) : Async<T>

    data class Failure(
        val errorMessage: String
    ) : Async<Nothing>
}
