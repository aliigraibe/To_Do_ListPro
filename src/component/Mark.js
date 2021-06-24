import {  updateTask } from "../store/actions";
import { useDispatch } from "react-redux";

const MARK = (props) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(updateTask({...props.updatetask,status:true}))}>
Finish My Task    </button>
  );
};

export default MARK;
