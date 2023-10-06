import { eventStatusEn } from "@/src/types/home/home";

export interface defaultEvent {
  name: string;
  timestamp: string;
  content: string;
}

/* 행사 생성 */

export interface createEventRequest extends defaultEvent {}

export interface createEventResponse {
  id: number;
}

/* 행사 수정 */
export interface updateEventRequest extends defaultEvent {}

/* 행사 조회 */
export interface summaryEvent extends Omit<defaultEvent, "content"> {
  id: number;
  eventStatus: eventStatusEn;
}

export interface getEventListResponse {
  size: number;
  page: number;
  totalPage: number;
  events: summaryEvent[];
}

export interface getEventDetailResponse extends summaryEvent {
  content: string;
}
