import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { AuthProvider } from "./Auth";
import LoginPage from "./LoginPage";
import TopPage from "./TopPage";
import PublicRoute from "./PublicRoute";

const App: FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PublicRoute exact path="/top" component={TopPage} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
