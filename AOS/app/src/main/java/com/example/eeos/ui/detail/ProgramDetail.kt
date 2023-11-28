package com.example.eeos.ui.detail

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun ProgramDetail() {
    Column {
        Column(
            horizontalAlignment = Alignment.Start
        ) {
            Category()
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(
                        id = R.dimen.margin_detail_screen_space_between_tag_and_post_title
                    )
                )
            )
            Title()
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(
                        id = R.dimen.margin_detail_screen_space_between_subtitle_and_divider
                    )
                )
            )
        }
        Column {
            Divider(
                modifier = Modifier.width(
                    dimensionResource(id = R.dimen.width_detail_screen_divider)
                ),
                thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
                color = colorResource(id = R.color.stroke_400)
            )
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(id = R.dimen.margin_detail_screen_space_post_content_vertical)
                )
            )
            Row(
                horizontalArrangement = Arrangement.Start
            ) {
                Spacer(
                    modifier = Modifier.width(
                        dimensionResource(
                            id = R.dimen.margin_detail_screen_space_post_content_horizontal
                        )
                    )
                )
                Content()
                Spacer(
                    modifier = Modifier.width(
                        dimensionResource(
                            id = R.dimen.margin_detail_screen_space_post_content_horizontal
                        )
                    )
                )
            }
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(id = R.dimen.margin_detail_screen_space_post_content_vertical)
                )
            )
        }
    }
}

@Composable
private fun Category() {
    val containerColor = colorResource(R.color.warning_light)
    val contentColor = colorResource(R.color.warning_strong)

    Button(
        modifier = Modifier
            .size(
                width = dimensionResource(id = R.dimen.width_detail_screen_space_category_chip),
                height = dimensionResource(id = R.dimen.height_detail_screen_space_category_chip)
            )
            .clip(RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_10dp))),
        onClick = {},
        enabled = false,
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = containerColor,
            disabledContentColor = contentColor
        ),
        border = BorderStroke(
            width = dimensionResource(id = R.dimen.width_stroke_0_7dp),
            color = colorResource(R.color.warning_strong)
        ),
        contentPadding = PaddingValues(
            horizontal = dimensionResource(id = R.dimen.padding_values_0dp),
            vertical = dimensionResource(id = R.dimen.padding_values_0dp)
        ),
    ) {
        Text(
            text = "주간 발표", /* ToDo */
            style = MaterialTheme.typography.labelSmall,
            color = colorResource(R.color.warning_strong)
        )
    }
}

@Composable
private fun Title() {
    Text(
        text = "10월 2주차 주간 발표", /* ToDo */
        style = MaterialTheme.typography.headlineMedium
    )
    Spacer(
        modifier = Modifier.height(
            dimensionResource(id = R.dimen.margin_detail_screen_space_between_title_and_subtitle)
        )
    )
    Text(
        text = "2023년 10월 6일 (일)", /* ToDo */
        style = MaterialTheme.typography.bodyLarge
    )
}

@Composable
private fun Content() {
    Text(
        text = "샘플 텍스트"/* ToDo */,
        style = MaterialTheme.typography.bodySmall,
        modifier = Modifier.width(
            width = dimensionResource(id = R.dimen.width_detail_screen_divider) - dimensionResource(
                id = R.dimen.margin_detail_screen_space_post_content_horizontal
            ) - dimensionResource(
                id = R.dimen.margin_detail_screen_space_post_content_horizontal
            )
        )
    )
}

@Preview(showBackground = true)
@Composable
private fun ProgramDetailPreview() {
    MaterialTheme {
        ProgramDetail()
    }
}
