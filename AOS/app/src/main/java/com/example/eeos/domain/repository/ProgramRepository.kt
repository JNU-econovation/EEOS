package com.example.eeos.domain.repository

import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListDto
import com.example.eeos.data.model.remote.response.ResponsePutAttendStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.skydoves.sandwich.ApiResponse

interface ProgramRepository {
    suspend fun getProgramDetail(
        programId: Int
    ): ApiResponse<BaseResponse<ResponseGetProgramDetailDto>>

    suspend fun getProgramList(
        category: String,
        programStatus: String,
        size: Int,
        page: Int
    ): ApiResponse<BaseResponse<ResponseGetProgramListDto>>

    suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): ApiResponse<BaseResponse<ResponsePutAttendStatusDto>>

    suspend fun getAttendStatus(
        programId: Int
    ): ApiResponse<BaseResponse<ResponseGetAttendStatusDto>>

    suspend fun getMemberList(
        programId: Int,
        attendStatus: String
    ): ApiResponse<BaseResponse<ResponseGetMemberListDto>>
}
