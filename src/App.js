import { Provider } from "react-redux";
import "./App.css";
import Frontend from "./Components/Frontend";
import store from "./Store/Store";

function App() {
  return <div>
    <Provider store={store}>
    <Frontend />
      
    </Provider>
  </div>;
}

export default App;
