import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Game from "./components/game/game";

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
