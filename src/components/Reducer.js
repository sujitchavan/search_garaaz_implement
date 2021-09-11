const INITIAL_STATE = {
  userData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      console.log("ADD_USER_DATA : " + action.payload);
      return { ...state, userData: action.payload };

    case "RESET_USER_DATA":
      console.log("RESET_USER_DATA");
      return { ...state, userData: [] };

    default:
      return state;
  }
};

export default reducer;
