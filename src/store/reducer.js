import slugify from "slugify";
import { ADD_TASK, DELETE_TASK, FETCH_TASK, UPDATE_TASK } from "./actions";
const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      const taskToKeep = state.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
      return {
        ...state,
        tasks: taskToKeep,
      };   
    
      case FETCH_TASK:
      return {
        ...state,
       tasks: action.payload.tasks,
      };
    case ADD_TASK:
      const { newTask } = action.payload;
      newTask.slug = slugify(newTask.name);

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case UPDATE_TASK:
      const { updateTasks } = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updateTasks.id? updateTasks : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
