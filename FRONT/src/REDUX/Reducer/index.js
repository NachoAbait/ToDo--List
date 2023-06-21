const initialState = {
  listado: [
    { name: "comprar mantel", checked: false },
    // Otros elementos de la lista...
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        listado: action.payload,
      };

    case "ADD_LIST":
      console.log("estoy en el reducer");
      console.log(action.payload);
      return {
        ...state,
        listado: [...state.listado, { name: action.payload, checked: false }],
      };

    case "CHECK_ITEM":
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

export default rootReducer;
