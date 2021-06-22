import { compose, createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { fetchTask } from "./actions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,composeEnhancers(applyMiddleware(thunk))
  );

  store.dispatch(fetchTask())
export default store;
