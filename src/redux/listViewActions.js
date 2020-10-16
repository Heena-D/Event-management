import {
  VIEW_DISCOUNT,
  VIEW_NO_DISCOUNT,
  VIEW_FREE,
  VIEW_ALL
} from "./listViewTypes";

export const viewDiscount = () => {
  return {
    type: VIEW_DISCOUNT
  };
};

export const viewNoDiscount = () => {
  return {
    type: VIEW_NO_DISCOUNT
  };
};

export const viewFree = () => {
  return {
    type: VIEW_FREE
  };
};

export const viewAll = () => {
  return {
    type: VIEW_ALL
  };
};
