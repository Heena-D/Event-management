import { ADD_EVENT } from "./eventTypes";
import {
  VIEW_DISCOUNT,
  VIEW_NO_DISCOUNT,
  VIEW_FREE,
  VIEW_ALL
} from "./listViewTypes";

const localStorageList = JSON.parse(localStorage.getItem("eventList"));
const initialState = {
  eventList: localStorageList ? localStorageList : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT: {
      let newarr = [...state.eventList, { ...action.payload, visible: true }];
      localStorage.setItem("eventList", JSON.stringify(newarr));
      return {
        eventList: newarr
      };
    }

    case VIEW_DISCOUNT: {
      let newarr = state.eventList.map(event =>
        event.discount > 0
          ? { ...event, visible: true }
          : { ...event, visible: false }
      );

      return { eventList: newarr };
    }

    case VIEW_NO_DISCOUNT: {
      let newarr = state.eventList.map(event =>
        event.discount === 0
          ? { ...event, visible: true }
          : { ...event, visible: false }
      );
      return { eventList: newarr };
    }

    case VIEW_FREE: {
      let newarr = state.eventList.map(event =>
        event.price === 0
          ? { ...event, visible: true }
          : { ...event, visible: false }
      );
      return { eventList: newarr };
    }

    case VIEW_ALL:
    default: {
      let newarr = state.eventList.map(event =>
        event.name ? { ...event, visible: true } : { ...event, visible: false }
      );
      return { eventList: newarr };
    }
  }
};

export default reducer;
