const initialState = {
  isOpen: false,
  isOpen2: false,
  listado: [],
  tasks: [],
  task: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state };

    case "LOGIN_USER":
      return { ...state };

    case "ADD_LIST":
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

    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };

    case "GET_TASK":
      return {
        ...state,
        tasks: action.payload,
      };

    case "PUT_TASK":
      return {
        ...state,
      };

      case "DELETE_TASK":
        const deletedTaskId = action.payload._id;
        // Filtra las tareas y devuelve todas excepto la tarea eliminada
        const updatedTasks = state.tasks.filter(task => task.id !== deletedTaskId);
        return {
          ...state,
          tasks: updatedTasks,
        };

    case "POST_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
