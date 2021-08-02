import {createStore} from "redux";
import { persistStore, persistReducer} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducers";
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2, 
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer
);
export const persistor = persistStore(store);
