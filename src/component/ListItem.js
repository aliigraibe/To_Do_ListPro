import {  Logo } from "../Styles";
import Deletetask from "./DeleteProduct";
import Mark from "./Mark";
const ListItem = (props) => {
  const task = props.task;
  let disable = false;
  if (new Date(task.deadLineDate) < new Date()) disable = true;
  return (
    <>
      <div>
        <div class="card" style={{ width: "20rem" }}>
          <div class="card-body">
            <h5 class="card-title">Name: {task.name}</h5>
            <p class="card-text">Status: {task.status}</p>{" "}
            <p class="card-text">priority: {task.priority}</p>{" "}
            <p class="card-text">description: {task.description}</p>{" "}
            <p class="card-text">dead Line Date: {task.deadLineDate}</p>
            <p class="card-text">time: {task.deadLineDate.length}</p>
            {!disable ? (
              <Deletetask deletetask={props.deletetask} taskId={task.id} />
            ) : (
              ""
            )}
            {!disable ? <Mark updatetask={task} /> : ""}
            {!disable ? <Logo to={`/${task.slug}/edit`}>edit</Logo> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
