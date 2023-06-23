const initialState = {
  isOpen: false,
  isOpen2: false,
  listado: [
    // Otros elementos de la lista...
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state };

    case "LOGIN_USER":
      return { ...state };

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

    case "OPEN_MODAL2":
      return {
        ...state,
        isOpen2: true,
      };

    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
      };

    case "CLOSE_MODAL2":
      return {
        ...state,
        isOpen2: false,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
