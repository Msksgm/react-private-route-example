import { FC, useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "./Auth";

import Nav from "./Nav";

const PrivateRoute: FC<RouteProps> = ({ component, ...rest }) => {
  const { currentUser, loading } = useContext(AuthContext);
  if (!loading) {
    if (currentUser) {
      return (
        <>
          <Nav />
          <Route component={component} {...rest} />;
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  } else {
    return (
      <>
        <Nav />
      </>
    );
  }
};

export default PrivateRoute;
