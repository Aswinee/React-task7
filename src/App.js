import "./App.css";
import { Signup } from "./components/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Signup />} />
          <Route
            className="welcome"
            path="/welcome"
            render={() => <Welcome />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
