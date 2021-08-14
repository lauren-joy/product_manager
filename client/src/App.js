import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import "./App.css";
import Edit from "./views/Edit";
const App = () => {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/product/:id" />
        <Edit path="/product/:id/edit" />
      </Router>
    </div>
  );
};
export default App;
