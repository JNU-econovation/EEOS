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
import com.example.eeos.presentation.detail.DetailScreen
import com.example.eeos.presentation.detail.DetailViewModel
import com.example.eeos.presentation.home.HomeScreen
import com.example.eeos.presentation.home.HomeViewModel
import com.example.eeos.presentation.login.LoginScreen

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
            val homeViewModel = hiltViewModel<HomeViewModel>()
            val homeUiState = homeViewModel.homeUiState.collectAsState()
            HomeScreen(
                homeUiState = homeUiState,
                loadProgramList = { category, programStatus, page -> (homeViewModel::getProgramList)(category, programStatus, page) },
                onProgramClick = { programId -> navActions.navigateToProgramDetail(programId) },
                refreshProgramList = { (homeViewModel::refreshProgramList)() }
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
            val programId = it.arguments?.getInt(EEOSDestinationsArgs.PROGRAM_ID_ARG)
            val detailViewModel = hiltViewModel<DetailViewModel>()

            if (programId != null) {
                detailViewModel.getProgramDetail(programId)
            } else {
                /* TODO */
            }

            val detailUiState = detailViewModel.detailUiState.collectAsState()
            DetailScreen(
                detailUiState = detailUiState
            )
        }
    }
}
