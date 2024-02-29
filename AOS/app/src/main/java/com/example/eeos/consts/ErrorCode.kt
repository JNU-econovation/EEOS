package com.example.eeos.consts

/** [1XXX] 프로그램 관련 에러
 * - PROGRAM_NOT_FOUND : 존재하지 않는 프로그램입니다.
 * - CREATION_DATE_INVALID : 오늘 이후 날짜에 해당하는 행사만 생성할 수 있습니다.
 * - CATEGORY_NOT_FOUND : 존재하지 않는 프로그램 카테고리입니다.
 * - PROGRAM_TYPE_NOT_FOUND : 존재하지 않는 프로그램 타입입니다.
 * - PROGRAM_STATUS_NOT_FOUND : 존재하지 않는 프로그램 상태입니다.
 * - EDIT_PERMISSION_DENIED : 프로그램 편집 권한이 없는 사용자입니다.
 * - PROGRAM_TYPE_CHANGE_DENIED : 프로그램 수요조사 여부는 수정할 수 없습니다.
 * - PROGRAM_IN_PROGRESS : 진행 중인 프로그램의 대상자를 수정할 수 없습니다.
 */
const val PROGRAM_NOT_FOUND = "1000"
const val CREATION_DATE_INVALID = "1001"
const val CATEGORY_NOT_FOUND = "1002"
const val PROGRAM_TYPE_NOT_FOUND = "1003"
const val PROGRAM_STATUS_NOT_FOUND = "1004"
const val EDIT_PERMISSION_DENIED = "1005"
const val PROGRAM_TYPE_CHANGE_DENIED = "1006"
const val PROGRAM_IN_PROGRESS = "1007"



/** [2XXX] 행사 참여 상태 변경과 관련된 에러
 * - ATTEND_STATUS_NOT_FOUND : 존재하지 않는 참석 상태입니다.
 * - PREVIOUS_ATTEND_STATUS_INCORRECT : 회원의 이전 상태가 올바르지 않습니다.
 * - ATTEND_STATUS_ALREADY_CHANGED : {name} 회원의 상태 변경을 다른 멤버가 수행했습니다.
 * - PROGRAM_EXPIRED : 프로그램 마감 기한이 지난 후 참석 상태 변경은 불가능합니다.
 * - ATTEND_INFO_NOT_FOUND : 존재하지 않는 참석 정보입니다.
 * - USER_NON_RELATED : 프로그램의 참석 대상자가 아닙니다.
 */
const val ATTEND_STATUS_NOT_FOUND = "2000"
const val PREVIOUS_ATTEND_STATUS_INCORRECT = "2001"
const val ATTEND_STATUS_ALREADY_CHANGED = "2002"
const val PROGRAM_EXPIRED = "2003"
const val ATTEND_INFO_NOT_FOUND = "2004"
const val USER_NON_RELATED = "2005"



/** [3XXX] 멤버 관련 에러
 * - MEMBER_NOT_FOUND : 존재하지 않는 멤버입니다.
 * - ACTIVE_STATUS_NOT_FOUND : 존재하지 않는 활동 상태입니다.
 * - ACTIVE_STATUS_BANNED : %s 활동 상태로 변경은 금지되었습니다.
 */
const val MEMBER_NOT_FOUND = "3000"
const val ACTIVE_STATUS_NOT_FOUND = "3001"
const val ACTIVE_STATUS_BANNED = "3002"



/** [4XXX] 인증/인가 관련 에러
 * - ACCESS_TOKEN_NOT_FOUND : 액세스 토큰이 존재하지 않습니다.
 * - ACCESS_TOKEN_EXPIRED : 엑세스 토큰이 만료되었습니다.
 * - OAUTH_SERVER_NOT_FOUND : 존재하지 않는 OAUTH 서버입니다.
 * - REFRESH_TOKEN_NOT_FOUND : 리프레쉬 토큰이 존재하지 않습니다.
 * - REFRESH_TOKEN_EXPIRED : 리프레쉬 토큰이 만료되었습니다.
 * - USER_NAME_INVALID : %s 유저의 이름이 형식과 일치하지 않습니다.
 */
const val ACCESS_TOKEN_NOT_FOUND = "4000"
const val ACCESS_TOKEN_EXPIRED = "4001"
const val OAUTH_SERVER_NOT_FOUND = "4002"
const val REFRESH_TOKEN_NOT_FOUND = "4004"
const val REFRESH_TOKEN_EXPIRED = "4005"
const val USER_NAME_INVALID = "4006"
