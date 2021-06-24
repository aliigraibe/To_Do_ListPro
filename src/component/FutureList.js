import ListItem from "./ListItem";
import { Flxii, Row } from "../Styles";
import { useSelector } from "react-redux";

const FutureList = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const today = new Date();
  const futureList = tasks
    .filter((task) => {
      return new Date(task.deadLineDate) > today;
    })
    .filter((task) => task.status === false)
    .map((task) => <ListItem task={task} key={task.id} />);
  return (
    <>
      <h1> Future:</h1>

      <Flxii>
        <Row>{futureList}</Row>
      </Flxii>
    </>
  );
};
export default FutureList;
