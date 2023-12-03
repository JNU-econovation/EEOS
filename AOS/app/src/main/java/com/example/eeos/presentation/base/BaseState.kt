package com.example.eeos.presentation.base

sealed interface BaseState<out T> {
    object Uninitialized : BaseState<Nothing>

    object Loading : BaseState<Nothing>

    data class Success<T>(
        val data: T
    ) : BaseState<T>

    data class Failure(
        val message: String
    ) : BaseState<Nothing>
}
