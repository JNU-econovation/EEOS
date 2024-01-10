package com.example.eeos.presentation.login

import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.core.content.ContextCompat
import com.example.eeos.BuildConfig
import com.example.eeos.R

@Composable
fun LoginOriginScreen() {
    val context = LocalContext.current
    val slackUri = "https://slack.com/oauth/v2/authorize?" +
            "client_id=${BuildConfig.client_id}" +
            "&amp;scope=" +
            "&user_scope=${BuildConfig.user_scope}" +
            "&amp;team_id=${BuildConfig.team_id}" +
            "&amp;&redirect_uri=${BuildConfig.redirect_uri}"

    Image(
        painter = painterResource(id = R.drawable.eeos_logo_symbol),
        contentDescription = "Logo of EEOS",
        modifier = Modifier.size(
            dimensionResource(id = R.dimen.size_common_screen_logo_120dp)
        )
    )
    Spacer(
        modifier = Modifier
            .height(
                dimensionResource(
                    id = R.dimen.margin_login_screen_between_logo_and_button
                )
            )
    )
    Image(
        painter = painterResource(
            id = R.drawable.btn_add_to_slack_4000x1172_d770e0c
        ),
        contentDescription = "",
        modifier = Modifier
            .size(
                width = dimensionResource(
                    id = R.dimen.width_login_screen_slack_button
                ),
                height = dimensionResource(
                    id = R.dimen.height_login_screen_slack_button
                )
            )
            .clickable {
                val webIntent: Intent =
                    Uri
                        .parse(slackUri)
                        .let { webPage ->
                            Intent(Intent.ACTION_VIEW, webPage)
                        }

                try {
                    ContextCompat.startActivity(context, webIntent, null)
                } catch (e: ActivityNotFoundException) {
                }
            }
    )
}
