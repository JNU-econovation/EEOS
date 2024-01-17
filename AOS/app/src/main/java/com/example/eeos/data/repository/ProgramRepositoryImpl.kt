package com.example.eeos.data.repository

import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListDto
import com.example.eeos.data.model.remote.response.ResponsePutAttendStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.example.eeos.data.source.ProgramDataSource
import com.example.eeos.domain.repository.ProgramRepository
import com.skydoves.sandwich.ApiResponse
import javax.inject.Inject

class ProgramRepositoryImpl @Inject constructor(
    private val programDataSource: ProgramDataSource
) : ProgramRepository {
    override suspend fun getProgramDetail(programId: Int): ApiResponse<BaseResponse<ResponseGetProgramDetailDto>> =
        programDataSource.getProgramDetail(programId)

    override suspend fun getProgramList(
        category: String,
        programStatus: String,
        size: Int,
        page: Int
    ): ApiResponse<BaseResponse<ResponseGetProgramListDto>> =
        programDataSource.getProgramLists(
            category = category,
            programStatus = programStatus,
            size = size,
            page = page
        )

    override suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): ApiResponse<BaseResponse<ResponsePutAttendStatusDto>> =
        programDataSource.putAttendStatus(
            programId = programId,
            requestPutAttendStatusDto = requestPutAttendStatusDto
        )

    override suspend fun getAttendStatus(
        programId: Int
    ): ApiResponse<BaseResponse<ResponseGetAttendStatusDto>> =
        programDataSource.getAttendStatus(
            programId = programId
        )

    override suspend fun getMemberList(
        programId: Int,
        attendStatus: String
    ): ApiResponse<BaseResponse<ResponseGetMemberListDto>> =
        programDataSource.getMemberList(
            programId = programId,
            attendStatus = attendStatus
        )
}
