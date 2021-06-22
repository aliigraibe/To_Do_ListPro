import { DeleteButton } from "../Styles";
import { deleteTask } from "../store/actions";
import { useDispatch } from "react-redux";

const DeleteTask = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButton onClick={() => dispatch(deleteTask(props.taskId))}>
      Delete Tasks
    </DeleteButton>
  );
};

export default DeleteTask;
