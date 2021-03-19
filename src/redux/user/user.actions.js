// The actions are just functions that return objects
import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return { type: UserActionTypes.SET_CURRENT_USER, payload: user };
};
