const initialState = {
  listado: [],
};

function rootReducer(state = initialState, action) {
  switch (action.payload) {
    case "GET_LIST":
      return {
        ...state,
        listado: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
