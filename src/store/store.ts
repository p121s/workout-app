import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { rootWatcher } from "./rootWatcher";
import createSagaMiddleware from "@redux-saga/core";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootWatcher);

export default store;
