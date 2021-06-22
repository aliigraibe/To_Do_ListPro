import { Flxii ,Logo} from "../Styles";
import Deletetask from "./DeleteProduct";
// import { Link } from "react-router-dom";
const ListItem = (props) => {
  const task = props.task;
  return (
    <Flxii>
    

      <p>{task.name}</p>
      <p>{task.status}</p>
      <p>{task.description}</p>
      <p>{task.priority}</p>
      <p>{task.deadLineDate}</p>
      <Deletetask deletetask={props.deletetask} taskId={task.id} />
      <Logo to={`/${task.slug}/edit`}>edit</Logo>{" "}
    </Flxii>
  );
};

export default ListItem;
