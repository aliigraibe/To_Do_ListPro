import ListItem from "./ListItem" 
import { Flxii, Row,Logo } from "../Styles";
import { useSelector } from "react-redux";
import { Route } from "react-router";


const TodayList =(props)=>{
  
  const tasks = useSelector((state)=>state.tasks)

 const listTask =
tasks.map((task)=> 
  <ListItem task={task} key={task.id} 
 />
  );   
 
return (
<Flxii>
  <Route exact path="/"> </Route>

  <Logo  to="/CreateForm">Add</Logo>

<Row>{listTask}</Row>
</Flxii>

)}
export default TodayList;
