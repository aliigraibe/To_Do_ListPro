import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addTask, updateTask } from "../store/actions";
import { Switch } from "react-router";
import { useSelector } from "react-redux";

const CreateForm = () => {
  const taskSlug = useParams().taskSlug;
  const tasks = useSelector((state) => state.tasks);
  const findTask = tasks.find((task) => task.slug === taskSlug);

  const dispatch = useDispatch();
  const history = useHistory();
  const [task, setTask] = useState(
    findTask ?? {
      name: "",
      description: "",
      priority: "",
      status: "",
      deadLineDate: "",
    }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (findTask) dispatch(updateTask(task));
    else dispatch(addTask(task));
    history.push("/");
  };

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };
  return (
    <Switch>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="enter your name "
            value={task.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label>description</label>
          <input
            type="text"
            class="form-control"
            placeholder="description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        {/* <div class="form-group">
          <label>priority</label>
          <input
            type="text"
            class="form-control"
            placeholder="enter your  priority "
            name="priority"
            value={task.priority}
            onChange={handleChange}
          />
          </div> */}
        <label for="cars">priority:</label>

        <select onChange={handleChange} value={task.priority} name="priority" id="priority">
          <option >high</option>
          <option >medium</option>
          <option>low</option>
        </select>
        <div class="form-group">
          <label>status</label>
          <input
            type="text"
            class="form-control"
            placeholder="add your status  "
            value={task.status}
            name="status"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label>deadLineDate</label>
          <input
            type="date"
            class="form-control"
            placeholder="add your status  "
            value={task.deadLineDate}
            name="deadLineDate"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          {findTask ? "Edit Task" : `Add Task`}
        </button>
      </form>{" "}
    </Switch>
  );
};

export default CreateForm;
