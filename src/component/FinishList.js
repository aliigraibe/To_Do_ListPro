import ListItem from "./ListItem";
import { Flxii, Row } from "../Styles";
import { useSelector } from "react-redux";
const FinishList = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const finishList = tasks
    .filter((task) => task.status === true)

    .map((task) => <ListItem task={task} key={task.id} />);
  return (
    <>
      {" "}
      <h1> Finish:</h1>
      <Flxii>
        <Row>{finishList}</Row>
      </Flxii>
    </>
  );
};
export default FinishList;
