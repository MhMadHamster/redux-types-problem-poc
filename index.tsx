import React from "react";
import { Store, combineReducers } from "redux";
import { Provider } from "react-redux";

interface RootStore { }

interface ActionTypes {
	readonly type: "TYPE";
}

interface Props {
	store: Store<RootStore>;
	children: React.ReactNode;
}

const reducer = combineReducers<RootStore>({});

const reducerWithMultipleTypeArgs = combineReducers<RootStore, ActionTypes>({});

const Fn: React.FC<Props> = ({ store, children }) => (<Provider store={store}>{children}</Provider>);
