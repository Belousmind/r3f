import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/store";
import Scene from "./components/scene/scene";
import Button from "./components/button/button";
import TurnIndicator from "./components/turn-indicator/turn-indicator";

function App() {
  return (
    <Provider store={store}>
      <TurnIndicator />
      <Button />
      <Scene />
    </Provider>
  );
}

export default App;
