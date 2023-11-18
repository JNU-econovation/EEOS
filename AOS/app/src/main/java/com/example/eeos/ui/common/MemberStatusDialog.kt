package com.example.eeos.ui.common

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.window.Dialog
import com.example.eeos.R

@Composable
fun MemberStatusDialog(
    memberInfo: String,
    doLogout: () -> Unit,
    onStatusBtnClick: () -> Unit
) {
    Dialog(onDismissRequest = { /*TODO*/ }) {
        Card(
            modifier = Modifier
                .size(
                    width = dimensionResource(
                        id = R.dimen.size_member_status_dialog_background_width
                    ),
                    height = dimensionResource(
                        id = R.dimen.size_member_status_dialog_background_height
                    )
                ),
            shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
            colors = CardDefaults.cardColors(
                containerColor = colorResource(R.color.background),
                contentColor = colorResource(R.color.paragraph)
            )
        ) {
            Row {
                Spacer(
                    modifier = Modifier.width(
                        dimensionResource(id = R.dimen.margin_member_status_dialog_background_side)
                    )
                )
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Spacer(
                        modifier = Modifier.height(
                            dimensionResource(
                                id = R.dimen.margin_member_status_dialog_background_top
                            )
                        )
                    )
                    Row(
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Spacer(
                            modifier = Modifier.width(
                                dimensionResource(
                                    id = R.dimen.margin_member_status_dialog_space_between_text_and_background
                                )
                            )
                        )
                        Text(
                            text = memberInfo,
                            style = MaterialTheme.typography.bodyLarge
                        )
                        Spacer(
                            modifier = Modifier.width(
                                dimensionResource(
                                    id = R.dimen.margin_member_status_dialog_space_between_text_and_logout_btn
                                )
                            )
                        )
                        Icon(
                            painter = painterResource(
                                R.drawable.memberstatusdialog_logoutbutton_24dp
                            ),
                            contentDescription = stringResource(
                                id = R.string.home_dialog_logout_button
                            ),
                            modifier = Modifier.clickable {
                                doLogout()
                            }
                        )
                    }
                    Spacer(
                        modifier = Modifier.height(
                            dimensionResource(
                                id = R.dimen.margin_member_status_dialog_space_between_texts
                            )
                        )
                    )
                    Text(
                        text = stringResource(id = R.string.home_dialog_description),
                        style = MaterialTheme.typography.bodySmall
                    )
                    Spacer(
                        modifier = Modifier.height(
                            dimensionResource(
                                id = R.dimen.margin_member_status_dialog_space_between_text_and_status_button
                            )
                        )
                    )
                    MemberStatusButtons("AM", onStatusBtnClick)
                    Spacer(
                        modifier = Modifier.height(
                            dimensionResource(
                                id = R.dimen.margin_member_status_dialog_background_bottom
                            )
                        )
                    )
                }
                Spacer(
                    modifier = Modifier.width(
                        dimensionResource(id = R.dimen.margin_member_status_dialog_background_side)
                    )
                )
            }
        }
    }
}

@Preview(showSystemUi = true)
@Composable
private fun MemberStatusDialogPreview() {
    MaterialTheme {
        MemberStatusDialog(
            memberInfo = "24기 장현지",
            doLogout = {},
            onStatusBtnClick = {}
        )
    }
}
