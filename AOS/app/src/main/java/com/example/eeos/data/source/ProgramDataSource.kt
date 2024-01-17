package com.example.eeos.data.source

import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListDto
import com.example.eeos.data.model.remote.response.ResponsePutAttendStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.example.eeos.data.service.ProgramService
import com.skydoves.sandwich.ApiResponse
import javax.inject.Inject

class ProgramDataSource @Inject constructor(
    private val programService: ProgramService
) {
    suspend fun getProgramDetail(
        programId: Int
    ): ApiResponse<BaseResponse<ResponseGetProgramDetailDto>> =
        programService.getProgramDetail(programId = programId)

    suspend fun getProgramLists(
        category: String,
        programStatus: String,
        size: Int,
        page: Int
    ): ApiResponse<BaseResponse<ResponseGetProgramListDto>> =
        programService.getProgramList(
            category = category,
            programStatus = programStatus,
            size = size,
            page = page
        )

    suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): ApiResponse<BaseResponse<ResponsePutAttendStatusDto>> =
        programService.putAttendStatus(
            programId = programId,
            requestPutAttendStatusDto = requestPutAttendStatusDto
        )

    suspend fun getAttendStatus(
        programId: Int
    ): ApiResponse<BaseResponse<ResponseGetAttendStatusDto>> =
        programService.getAttendStatus(
            programId = programId
        )

    suspend fun getMemberList(
        programId: Int,
        attendStatus: String
    ): ApiResponse<BaseResponse<ResponseGetMemberListDto>> =
        programService.getMemberList(
            programId = programId,
            attendStatus = attendStatus
        )
}
