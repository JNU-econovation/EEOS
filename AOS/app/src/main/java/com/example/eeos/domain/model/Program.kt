package com.example.eeos.domain.model

import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.consts.ProgramType

data class Program(
    val programId: Int,
    val title: String,
    val deadLine: String,
    val category: Category,
    val programStatus: ProgramStatus,
    val type: ProgramType
)
