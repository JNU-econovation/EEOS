package com.example.eeos.presentation.detail.bottomsheet

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.data.model.remote.request.RequestPutAttendStatusDto
import com.example.eeos.domain.repository.ProgramRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import java.io.IOException
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class UserAttendStatusUiState(
    val isError: Boolean = false,
    val isLoading: Boolean = false,

    val userName: String = "",
    val userAttendStatus: String = ""
)

@HiltViewModel
class UserAttendStatusViewModel @Inject constructor(
    private val programRepository: ProgramRepository
) : ViewModel() {
    private val _userAttendStatusUiState = MutableStateFlow(UserAttendStatusUiState())
    val userAttendStatusUiState = _userAttendStatusUiState.asStateFlow()

    fun getUserAttendStatus(programId: Int) {
        viewModelScope.launch {
            programRepository.getAttendStatus(programId)
                .onSuccess { userAttendStatus ->
                    _userAttendStatusUiState.update { currentState ->
                        currentState.copy(
                            userName = userAttendStatus.name,
                            userAttendStatus = userAttendStatus.attendStatus
                        )
                    }
                }
                .onFailure { exception ->
                    when (exception) {
                        is HttpException -> {
                            _userAttendStatusUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }

                        is IOException -> {
                            _userAttendStatusUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }
                    }
                }
        }
    }

    fun putUserAttendStatus(
        programId: Int,
        beforeAttendStatus: String,
        afterAttendStatus: String
    ) {
        viewModelScope.launch {
            programRepository.putAttendStatus(
                programId = programId,
                requestPutAttendStatusDto = RequestPutAttendStatusDto(
                    beforeAttendStatus = beforeAttendStatus,
                    afterAttendStatus = afterAttendStatus
                )
            )
                .onSuccess {
                    getUserAttendStatus(programId)
                }
                .onFailure { exception ->
                    when (exception) {
                        is HttpException -> {
                            _userAttendStatusUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }

                        is IOException -> {
                            _userAttendStatusUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }
                    }
                }
        }
    }
}
