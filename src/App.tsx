import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { AuthProvider } from "./Auth";
import LoginPage from "./LoginPage";
import TopPage from "./TopPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import PrivatePage from "./PrivatePage";

const App: FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PublicRoute exact path="/top" component={TopPage} />
            <PrivateRoute exact path="/private" component={PrivatePage} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
