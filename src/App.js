import { Head } from "./Styles";
import TodayList from "./component/TodayList";
import FutureList from "./component/FutureList";
import FinishList from "./component/FinishList";
import { Switch, Route } from "react-router";
import "./App.css";
import CreateForm from "./component/CreateForm";
function App() {
  return (
    <Head>
      <Switch>
        <Route path={["/CreateForm/", "/:taskSlug/edit/"]}>
          <CreateForm />
        </Route>

        <Route exact path="/">
          <TodayList />
          <FutureList />
          <FinishList />{" "}
        </Route>
      </Switch>
    </Head>
  );
}

export default App;
