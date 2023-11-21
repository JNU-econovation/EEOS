package com.example.eeos.ui.detail

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
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
            Spacer(modifier = Modifier.height(dimensionResource(id = R.dimen.margin_detail_screen_space_between_tag_and_post_title)))
            Title()
            Spacer(modifier = Modifier.height(dimensionResource(id = R.dimen.margin_detail_screen_space_between_subtitle_and_divider)))
        }
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Divider(
                modifier = Modifier.width(dimensionResource(id = R.dimen.width_detail_screen_divider)),
                thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
                color = colorResource(id = R.color.stroke_400)
            )
            Spacer(modifier = Modifier.height(dimensionResource(id = R.dimen.margin_detail_screen_space_post_content_vertical)))
            Content()
            Spacer(modifier = Modifier.height(dimensionResource(id = R.dimen.margin_detail_screen_space_post_content_vertical)))
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
        enabled = true,
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
        text = "10월 2주차 주간 발표",/* ToDo */
        style = MaterialTheme.typography.headlineMedium
    )
    Text(
        text = "2023년 10월 6일 (일)",/* ToDo */
        style = MaterialTheme.typography.bodyLarge
    )
}

@Composable
private fun Content() {
    Text(
        text = "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리\n" +
                "나라만세 무궁화 삼천리 화려강산\n" +
                "일시 : 10월 6일 (일)\n" +
                "발표팀\n" +
                "A팀\n" +
                "팀쿠키\n" +
                "도참없\n" +
                "잉여\n" +
                "더지\n" +
                "kipi\n" +
                "발표 자료는 16시까지 깃허브에 업로드 부탁드립니다.",/* ToDo */
        style = MaterialTheme.typography.bodySmall
    )
}

@Preview(showBackground = true)
@Composable
private fun ProgramDetailPreview() {
    MaterialTheme {
        ProgramDetail()
    }
}
