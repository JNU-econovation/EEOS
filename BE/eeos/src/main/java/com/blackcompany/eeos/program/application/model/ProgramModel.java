package com.blackcompany.eeos.program.application.model;

import com.blackcompany.eeos.common.support.AbstractModel;
import com.blackcompany.eeos.common.utils.DateConverter;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ProgramModel implements AbstractModel {
	private Long id;
	private String title;

	private String content;

	private Long userId;

	private Timestamp programDate;
	private String eventStatus;

	public ProgramStatus calculate() {
		LocalDate now = DateConverter.toLocalDate(Instant.now().toEpochMilli());
		LocalDate programDate = DateConverter.toLocalDate(this.programDate.getTime());

		if (programDate.isBefore(now)) {
			return ProgramStatus.END;
		}
		return ProgramStatus.ACTIVE;
	}
}