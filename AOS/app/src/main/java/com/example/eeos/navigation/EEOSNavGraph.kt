package com.example.eeos.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.eeos.consts.AttendStatus
import com.example.eeos.presentation.detail.DetailScreen
import com.example.eeos.presentation.detail.MemberAttendanceViewModel
import com.example.eeos.presentation.detail.ProgramDetailViewModel
import com.example.eeos.presentation.detail.bottomsheet.UserAttendStatusViewModel
import com.example.eeos.presentation.home.HomeScreen
import com.example.eeos.presentation.home.HomeViewModel
import com.example.eeos.presentation.login.LoginScreen
import com.example.eeos.presentation.topappbar.TopAppBarViewModel

@Composable
fun EEOSNavGraph(
    navController: NavHostController = rememberNavController(),
    startDestination: String = EEOSDestinations.LOGIN_ROUTE,
    navActions: EEOSNavigationActions = remember(navController) {
        EEOSNavigationActions(navController)
    }
) {
//    val currentNavBackStackEntry by navController.currentBackStackEntryAsState()
//    val currentRoute = currentNavBackStackEntry?.destination?.route ?: startDestination

    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        composable(
            EEOSDestinations.LOGIN_ROUTE
        ) {
            LoginScreen(
                onClick = { navActions.navigateToHome() }
            )
        }
        composable(
            EEOSDestinations.HOME_ROUTE
        ) {
            val topAppBarViewModel = hiltViewModel<TopAppBarViewModel>()
            val homeViewModel = hiltViewModel<HomeViewModel>()

            val topAppBarUiState = topAppBarViewModel.topAppBarUiState.collectAsState()
            val homeUiState = homeViewModel.homeUiState.collectAsState()

            HomeScreen(
                homeUiState = homeUiState,
                topAppBarUiState = topAppBarUiState,
                loadProgramList = { category, programStatus, page ->
                    (homeViewModel::getProgramList)(
                        category,
                        programStatus,
                        page
                    )
                },
                onProgramClick = { programId -> navActions.navigateToProgramDetail(programId) },
                refreshProgramList = { (homeViewModel::refreshProgramList)() },
                putActiveStatus = { activeStatus ->
                    (topAppBarViewModel::putActiveStatus)(
                    activeStatus
                )
                }
            )
        }

        composable(
            EEOSDestinations.DETAIL_ROUTE,
            arguments = listOf(
                navArgument(EEOSDestinationsArgs.PROGRAM_ID_ARG) {
                    type = NavType.IntType; defaultValue = 0
                }
            )
        ) {
            val programId =
                it.arguments?.getInt(EEOSDestinationsArgs.PROGRAM_ID_ARG) ?: 1 /* TODO */

            val topAppBarViewModel = hiltViewModel<TopAppBarViewModel>()
            val programDetailViewModel = hiltViewModel<ProgramDetailViewModel>()
            val memberAttendanceViewModel = hiltViewModel<MemberAttendanceViewModel>()
            val userAttendanceViewModel = hiltViewModel<UserAttendStatusViewModel>()

            if (programId != null) {
                programDetailViewModel.getProgramDetail(programId)

                memberAttendanceViewModel.getAttendeeList(programId, AttendStatus.attend)
                memberAttendanceViewModel.getAttendeeList(programId, AttendStatus.absent)
                memberAttendanceViewModel.getAttendeeList(programId, AttendStatus.perceive)
                memberAttendanceViewModel.getAttendeeList(programId, AttendStatus.nonResponse)

                userAttendanceViewModel.getUserAttendStatus(programId)
            } else {
                /* TODO */
            }

            val topAppBarUiState = topAppBarViewModel.topAppBarUiState.collectAsState()
            val programDetailUiState = programDetailViewModel.detailUiState.collectAsState()
            val memberAttendanceUiState =
                memberAttendanceViewModel.memberDetailUiState.collectAsState()
            val userAttendanceUiState =
                userAttendanceViewModel.userAttendStatusUiState.collectAsState()

            DetailScreen(
                detailUiState = programDetailUiState,
                memberUiState = memberAttendanceUiState,
                attendanceUiState = userAttendanceUiState,
                topAppBarUiState = topAppBarUiState,
                putUserAttendStatus = { afterAttendStatus ->
                    (userAttendanceViewModel::putUserAttendStatus)(
                        programId,
                        userAttendanceUiState.value.userAttendStatus,
                        afterAttendStatus
                    )
                },
                putActiveStatus = { activeStatus ->
                    (topAppBarViewModel::putActiveStatus)(
                    activeStatus
                )
                }
            )
        }
    }
}
