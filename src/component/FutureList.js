import ListItem from "./ListItem";
import { Flxii, Row, Logo } from "../Styles";
import { useSelector } from "react-redux";
import { Route } from "react-router";

const FutureList = (props) => {
  const tasks = useSelector((state) => state.tasks);

  const futureList = tasks
    .filter((task) => task.deadLineDate )
    .map((task) => <ListItem task={task} key={task.id} />);

  return (
    <Flxii>
      <Route exact path="/">
        {" "}
      </Route>

      <Row>{futureList}</Row>
    </Flxii>
  );
};
export default FutureList;
