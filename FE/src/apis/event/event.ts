import {
  createEventRequest,
  createEventResponse,
  getEventListResponse,
  updateEventRequest,
} from ".";
import { https } from "..";

/* 행사 생성 */
export const createEvent = async (body: createEventRequest) => {
  const { data } = await https.post<createEventResponse>("/events", body);
  return data;
};

/* 행사 수정 */
export const updateEvent = async (
  eventId: number,
  body: updateEventRequest
) => {
  const { data } = await https.put(`/events/${eventId}`, body);
  return data;
};

/* 행사 리스트 조회 */
export const getEventList = async (
  eventStatus: string,
  size: number,
  page: number
) => {
  const response = await https.get<getEventListResponse>(
    `/events?eventStatus=${eventStatus}&size=${size}&page=${page}`
  );
  return response.data;
};

/* 행사 상세 조회 */
export const getEventDetail = async (eventId: number) => {
  const { data } = await https.get(`/events/${eventId}`);
  return data;
};
