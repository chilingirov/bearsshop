// The actions are just functions that return objects

export const setCurrentUser = (user) => {
  return { type: "SET_CURRENT_USER", payload: user };
};
