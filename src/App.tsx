import { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { AuthProvider } from "./lib/Auth";
import LoginPage from "./pages/LoginPage";
import TopPage from "./pages/TopPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import PrivatePage from "./pages/PrivatePage";

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
