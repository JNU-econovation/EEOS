package com.example.eeos.domain.model

import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramType

data class ProgramDetail(
    val title: String,
    val deadLine: String,
    val content: String,
    val category: Category,
    val type: ProgramType
)
