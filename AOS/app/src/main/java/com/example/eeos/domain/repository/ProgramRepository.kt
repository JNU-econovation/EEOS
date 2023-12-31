package com.example.eeos.domain.repository

import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.domain.model.Member
import com.example.eeos.domain.model.Program
import com.example.eeos.domain.model.ProgramDetail

interface ProgramRepository {
    suspend fun getProgramDetail(
        programId: Int
    ): Result<ProgramDetail>

    suspend fun getProgramList(
        category: String,
        programStatus: String,
        size: Int,
        page: Int
    ): Result<List<Program>>

    suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): Result<Unit>

    suspend fun getAttendStatus(
        programId: Int
    ): Result<com.example.eeos.domain.model.AttendStatus>

    suspend fun getMemberList(
        programId: Int,
        attendStatus: String
    ): Result<List<Member>>
}
