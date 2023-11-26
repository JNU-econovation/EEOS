package com.example.eeos.navigation

import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController

/**
 * Screens used in [EEOSDestinations]
 */
private object EEOSScreens {
    const val LOGIN_SCREEN = "login"
    const val HOME_SCREEN = "home"
    const val PROGRAM_DETAIL_SCREEN = "programDetail"
}

/**
 * Arguments used in [EEOSDestinations] routes
 */
object EEOSDestinationsArgs {
    const val PROGRAM_ID_ARG = "programId"
}

/**
 * Destinations used in the [EEOSActivity]
 */
object EEOSDestinations {
    const val LOGIN_ROUTE = EEOSScreens.LOGIN_SCREEN
    const val HOME_ROUTE = EEOSScreens.HOME_SCREEN
    const val DETAIL_ROUTE =
        "${EEOSScreens.PROGRAM_DETAIL_SCREEN}?${EEOSDestinationsArgs.PROGRAM_ID_ARG}={${EEOSDestinationsArgs.PROGRAM_ID_ARG}}" // programDetail/${programId}
}

/**
 * Models the navigation actions in the app.
 */
class EEOSNavigationActions(private val navController: NavHostController) {
    fun navigateToLogin() {
        navController.navigate(EEOSDestinations.LOGIN_ROUTE) {
            // 로그아웃 시도 후 로그인 페이지로 돌아오며
            // 모든 BackStack 제거
            popUpTo(navController.graph.findStartDestination().id)
            launchSingleTop = true
        }
    }

    fun navigateToHome() {
        navController.navigate(EEOSDestinations.HOME_ROUTE) {
            // 로그인 후 로그인 화면 BackStack에서 제거
            // 현재 홈 화면의 State 유지
            popUpTo(navController.graph.findStartDestination().id) {
                inclusive = true
                saveState = true
            }
            // Avoid multiple copies of the same destination
            launchSingleTop = true
            // 유지된 홈 화면의 상태를 가져옴
            restoreState = true
        }
    }

    fun navigateToProgramDetail(programId: Int = 1) {
        navController.navigate(
            "${EEOSScreens.PROGRAM_DETAIL_SCREEN}?${EEOSDestinationsArgs.PROGRAM_ID_ARG}=$programId"
        ) {
            popUpTo(EEOSDestinations.HOME_ROUTE)
            launchSingleTop = true
        }
    }
}
