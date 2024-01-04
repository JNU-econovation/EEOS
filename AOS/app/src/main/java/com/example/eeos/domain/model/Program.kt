package com.example.eeos.domain.model

data class Program(
    val programId: Int,
    val title: String,
    val deadLine: String,
    val category: String,
    val programStatus: String,
    val type: String
)
