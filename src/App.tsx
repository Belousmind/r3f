import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Scene from "./components/scene/scene";
import { ResetGameButton, PlayWithBot } from "./components/button/button";
import TurnIndicator from "./components/turn-indicator/turn-indicator";

function App() {
  return (
    <Provider store={store}>
      <TurnIndicator />
      <ResetGameButton />
      <PlayWithBot />
      <Scene />
    </Provider>
  );
}

export default App;
