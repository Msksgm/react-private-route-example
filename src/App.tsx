import { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
