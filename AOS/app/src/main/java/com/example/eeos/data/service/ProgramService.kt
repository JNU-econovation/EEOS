package com.example.eeos.data.service

import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListDto
import com.example.eeos.data.model.remote.response.ResponsePutAttendStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.PUT
import retrofit2.http.Path
import retrofit2.http.Query

interface ProgramService {
    @GET("programs/{programId}")
    suspend fun getProgramDetail(
        @Path(value = "programId") programId: Int
    ): BaseResponse<ResponseGetProgramDetailDto>

    @GET("programs")
    suspend fun getProgramList(
        @Query("category") category: String,
        @Query("programStatus") programStatus: String,
        @Query("size") size: Int,
        @Query("page") page: Int
    ): BaseResponse<ResponseGetProgramListDto>

    @PUT("programs/{programId}/members/attendStatus")
    suspend fun putAttendStatus(
        @Path(value = "programId") programId: Int,
        @Body requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): BaseResponse<ResponsePutAttendStatusDto>

    @GET("programs/{programId}/members/attendStatus")
    suspend fun getAttendStatus(
        @Path(value = "programId") programId: Int,
    ): BaseResponse<ResponseGetAttendStatusDto>

    @GET("programs/{programId}/members")
    suspend fun getMemberList(
        @Path(value = "programId") programId: Int,
        @Query("attendStatus") attendStatus: String
    ): BaseResponse<ResponseGetMemberListDto>
}
