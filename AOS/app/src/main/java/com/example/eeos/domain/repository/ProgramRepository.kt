package com.example.eeos.domain.repository

import com.example.eeos.consts.AttendStatus
import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.domain.model.MemberList
import com.example.eeos.domain.model.ProgramDetail
import com.example.eeos.domain.model.ProgramList

interface ProgramRepository {
    suspend fun getProgramDetail(
        programId: Int
    ): Result<ProgramDetail>

    suspend fun getProgramList(
        category: Category,
        programStatus: ProgramStatus,
        size: Int,
        page: Int
    ): Result<ProgramList>

    suspend fun putAttendStatus(
        programId: Int,
        beforeAttendStatus: AttendStatus,
        afterAttendStatus: AttendStatus
    ): Result<Unit>

    suspend fun getMemberList(
        programId: Int,
        attendStatus: AttendStatus
    ): Result<MemberList>
}
