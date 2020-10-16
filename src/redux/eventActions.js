import { ADD_EVENT } from "./eventTypes";

export const addEvent = eventInfo => {
  return {
    type: ADD_EVENT,
    payload: eventInfo
  };
};
