package com.example.eeos.data.repository

import com.example.eeos.consts.AttendStatus
import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.source.ProgramDataSource
import com.example.eeos.domain.model.Member
import com.example.eeos.domain.model.Program
import com.example.eeos.domain.model.ProgramDetail
import com.example.eeos.domain.repository.ProgramRepository
import javax.inject.Inject

class ProgramRepositoryImpl @Inject constructor(
    private val programDataSource: ProgramDataSource
) : ProgramRepository {
    override suspend fun getProgramDetail(programId: Int): Result<ProgramDetail> =
        runCatching {
            programDataSource.getProgramDetail(programId).data!!.toProgramDetail()
        }

    override suspend fun getProgramList(
        category: Category,
        programStatus: ProgramStatus,
        size: Int,
        page: Int
    ): Result<List<Program>> =
        runCatching {
            programDataSource.getProgramLists(
                category = category,
                programStatus = programStatus,
                size = size,
                page = page
            ).data!!.toProgramList()
        }

    override suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): Result<Unit> =
        runCatching {
            programDataSource.putAttendStatus(
                programId = programId,
                requestPutAttendStatusDto = requestPutAttendStatusDto
            ).data
        }

    override suspend fun getMemberList(
        programId: Int,
        attendStatus: AttendStatus
    ): Result<List<Member>> =
        runCatching {
            programDataSource.getMemberList(
                programId = programId,
                attendStatus = attendStatus
            ).data!!.toMemberList()
        }
}
