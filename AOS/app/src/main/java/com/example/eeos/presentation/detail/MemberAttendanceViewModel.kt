package com.example.eeos.presentation.detail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.EEOSApplication
import com.example.eeos.consts.AttendStatus
import com.example.eeos.domain.model.Member
import com.example.eeos.domain.repository.AuthRepository
import com.example.eeos.domain.repository.ProgramRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import java.io.IOException
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class MemberAttendanceUiState(
    val isError: Boolean = false,
    val isLoading: Boolean = false,

    val attendMembers: List<Member> = listOf(),
    val absentMembers: List<Member> = listOf(),
    val lateMembers: List<Member> = listOf(),
    val nonResponseMembers: List<Member> = listOf()
)

@HiltViewModel
class MemberAttendanceViewModel @Inject constructor(
    private val programRepository: ProgramRepository,
    private val authRepository: AuthRepository
) : ViewModel() {
    private val _memberAttendanceUiState = MutableStateFlow(MemberAttendanceUiState())
    val memberDetailUiState = _memberAttendanceUiState.asStateFlow()

    fun getAttendeeList(programId: Int, attendStatus: String) {
        viewModelScope.launch {
            programRepository.getMemberList(
                programId = programId,
                attendStatus = attendStatus
            )
                .onSuccess { memberList ->
                    updateUiState(attendStatus = attendStatus, memberList = memberList)
                }
                .onFailure { exception ->
                    if (exception.message!!.contains("401")) {
                        val refresh = EEOSApplication.prefs.refresh
                        if (refresh != null) {
                            authRepository.reIssueToken(refresh)
                        } else {
                            /* TODO: 로그인 페이지로 이동하는 함수 작성 */
                        }
                    }

                    when (exception) {
                        is HttpException -> {
                            _memberAttendanceUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }

                        is IOException -> {
                            _memberAttendanceUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }
                    }
                }
        }
    }

    private fun updateUiState(attendStatus: String, memberList: List<Member>) {
        when (attendStatus) {
            AttendStatus.attend ->
                _memberAttendanceUiState.update { currentState ->
                    currentState.copy(
                        attendMembers = memberList
                    )
                }
            AttendStatus.absent ->
                _memberAttendanceUiState.update { currentState ->
                    currentState.copy(
                        absentMembers = memberList
                    )
                }
            AttendStatus.late ->
                _memberAttendanceUiState.update { currentState ->
                    currentState.copy(
                        lateMembers = memberList
                    )
                }
            AttendStatus.nonResponse ->
                _memberAttendanceUiState.update { currentState ->
                    currentState.copy(
                        nonResponseMembers = memberList
                    )
                }
        }
    }
}
