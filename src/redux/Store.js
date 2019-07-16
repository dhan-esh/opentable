
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import rootSaga from "../sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// export default function store() {
//     return createStore();
// }


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
  
  export default store;
  