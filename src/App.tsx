import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/store";
import Scene from "./components/scene/scene";

function App() {
  return (
    <Provider store={store}>
      <Scene />
    </Provider>
  );
}

export default App;
