const reducer = (prev, action) =>
  typeof action === "function" ? action(prev) : prev;

const useState = (initialState) => useReducer(reducer, initialState);
