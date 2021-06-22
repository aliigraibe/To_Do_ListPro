import axios from "axios";

export const DELETE_TASK = "DELETE_TASK";
export const FETCH_TASK = "FETCH_TASK";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId: taskId },
      });
    } catch (error) {console.log(error)}
  };
};

export const fetchTask = () => {
  return async (dispatch) => {
    try {

      const res = await axios.get("http://localhost:8080/tasks");
      dispatch({
        type: FETCH_TASK,

        payload: { tasks: res.data },
      });
    } catch (error) {}
  };
};
export const addTask = (newTask) => {
  return async (dispatch) => {


    try {
   const res = await axios.post(`http://localhost:8080/tasks/`,newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask:res.data}
      });
    } catch (error) {console.log(error)}
  };
};

export const updateTask = (updateTasks) => {
  return async (dispatch) => {
    try {
  const res =  await axios.put(`http://localhost:8080/tasks/${updateTasks.id}`,updateTasks);
      dispatch({
        type: UPDATE_TASK,
        payload: { updateTasks:res.data}
      });
    } catch (error) {console.log(error)}
  };
};
