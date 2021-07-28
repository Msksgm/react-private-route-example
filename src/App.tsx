import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TopPage from "./pages/TopPage";
import PrivatePage from "./pages/PrivatePage";

import { AuthProvider } from "./lib/Auth";
import PublicRoute from "./lib/PublicRoute";
import PrivateRoute from "./lib/PrivateRoute";

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
