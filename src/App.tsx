import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
