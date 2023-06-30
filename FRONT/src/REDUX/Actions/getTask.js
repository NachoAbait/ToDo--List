import axios from "axios";

export function getTask(id) {
  return async function (dispatch) {
    console.log("estoy en la action");
    const task = await axios.get(`http://localhost:3001/task/${id}`);

    return dispatch({
      type: "GET_TASK",
      payload: task.data,
    });
  };
}

export default getTask;
