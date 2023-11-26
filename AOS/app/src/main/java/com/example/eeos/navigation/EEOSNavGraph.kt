package com.example.eeos.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.eeos.ui.detail.DetailScreen
import com.example.eeos.ui.home.HomeScreen
import com.example.eeos.ui.login.LoginScreen

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
            HomeScreen(
                onProgramClick = { navActions.navigateToProgramDetail(1) }
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
            DetailScreen()
        }
    }
}
