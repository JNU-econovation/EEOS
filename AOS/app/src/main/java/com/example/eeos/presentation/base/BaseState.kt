package com.example.eeos.presentation.base

sealed interface UiState<out T> {
    object Uninitialized : UiState<Nothing>

    object Loading : UiState<Nothing>

    data class Success<T>(
        val data: T
    ) : UiState<T>

    data class Failure(
        val msg: String
    ) : UiState<Nothing>
}