package com.example.eeos.data.source

import com.example.eeos.consts.AttendStatus
import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetMemberListDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramDetailDto
import com.example.eeos.data.model.remote.response.ResponseGetProgramListsDto
import com.example.eeos.data.model.remote.response.ResponsePutAttendStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.example.eeos.data.service.ProgramService
import javax.inject.Inject

class ProgramDataSource @Inject constructor(
    private val programService: ProgramService
) {
    suspend fun getProgramDetail(
        programId: Int
    ): BaseResponse<ResponseGetProgramDetailDto> =
        programService.getProgramDetail(programId = programId)

    suspend fun getProgramLists(
        category: Category,
        programStatus: ProgramStatus,
        size: Int,
        page: Int
    ): BaseResponse<ResponseGetProgramListsDto> =
        programService.getProgramLists(
            category = category,
            programStatus = programStatus,
            size = size,
            page = page
        )

    suspend fun putAttendStatus(
        programId: Int,
        requestPutAttendStatusDto: RequestPutAttendStatusDto
    ): BaseResponse<ResponsePutAttendStatusDto> =
        programService.putAttendStatus(
            programId = programId,
            requestPutAttendStatusDto = requestPutAttendStatusDto
        )

    suspend fun getMemberList(
        programId: Int,
        attendStatus: AttendStatus
    ): BaseResponse<ResponseGetMemberListDto> =
        programService.getMemberList(
            programId = programId,
            attendStatus = attendStatus
        )
}