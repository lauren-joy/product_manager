import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/product/:id" />
      </Router>
    </div>
  );
};
export default App;
