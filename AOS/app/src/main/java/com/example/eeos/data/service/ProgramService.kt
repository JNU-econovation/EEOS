package com.example.eeos.data.service

import com.example.eeos.consts.AttendStatus
import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListsDto
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
    suspend fun getProgramLists(
        @Query("category") category: Category,
        @Query("programStatus") programStatus: ProgramStatus,
        @Query("size") size: Int,
        @Query("page") page: Int
    ): BaseResponse<ResponseGetProgramListsDto>

    @PUT("programs/{programId}/members/attendStatus")
    suspend fun putAttendStatus(
        @Path(value = "programId") programId: Int,
        @Body requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): BaseResponse<ResponsePutAttendStatusDto>

    @GET("programs/{programId}/members")
    suspend fun getMemberList(
        @Path(value = "programId") programId: Int,
        @Query("attendStatus") attendStatus: AttendStatus
    ): BaseResponse<ResponseGetMemberListDto>
}
