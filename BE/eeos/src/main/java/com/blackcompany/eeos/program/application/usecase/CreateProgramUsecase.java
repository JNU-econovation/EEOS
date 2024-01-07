package com.blackcompany.eeos.program.application.usecase;

import com.blackcompany.eeos.program.application.dto.CommandProgramResponse;
import com.blackcompany.eeos.program.application.dto.CreateProgramRequest;

public interface CreateProgramUsecase {

	/**
	 * 프로그램을 저장시킨다.
	 *
	 * @param request 프로그램 생성자 id
	 * @param request 프로그램 저장을 하기 위한 request 객체
	 * @return 프로그램 식별 id 전달
	 */
	CommandProgramResponse create(Long memberId, CreateProgramRequest request);
}
