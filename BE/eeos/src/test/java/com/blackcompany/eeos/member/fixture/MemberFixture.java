package com.blackcompany.eeos.member.fixture;

import com.blackcompany.eeos.auth.application.domain.OauthServerType;
import com.blackcompany.eeos.member.application.model.ActiveStatus;
import com.blackcompany.eeos.member.application.model.MemberModel;
import com.blackcompany.eeos.member.persistence.MemberEntity;

public class MemberFixture {
	public static MemberEntity 멤버_엔티티(Long memberId, ActiveStatus status) {
		return MemberEntity.builder()
				.id(memberId)
				.name(String.valueOf(memberId))
				.oauthServerType(OauthServerType.SLACK)
				.activeStatus(status)
				.build();
	}

	public static MemberModel 멤버_모델(Long memberId, ActiveStatus status) {
		return MemberModel.builder()
				.id(memberId)
				.name(String.valueOf(memberId))
				.oauthServerType(OauthServerType.SLACK)
				.activeStatus(status)
				.build();
	}
}
