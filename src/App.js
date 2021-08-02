import "./App.css";
import Board from "./Components/Board";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./Redux/redux";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Board />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
