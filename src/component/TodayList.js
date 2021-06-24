import ListItem from "./ListItem";
import { Flxii, Row, Logo } from "../Styles";
import { useSelector } from "react-redux";
import { Route } from "react-router";

const TodayList = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const today = new Date();
  const listTask = tasks
    .filter((task) => {
      return new Date(task.deadLineDate) <= today;
    })
    .filter((task) => task.status === false)
    .map((task) => <ListItem task={task} key={task.id} />);

  return (

<>
    <Logo to="/CreateForm">Add</Logo>
    <h1> Today: {listTask.lenght} </h1>     

    <Flxii>
      {" "}
      <Route exact path="/">
      </Route>
      <Row>{listTask}</Row>
    </Flxii></>
  );
};
export default TodayList;
