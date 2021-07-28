import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import Nav from "./organisms/Nav";

const PublicRoute: FC<RouteProps> = ({ component, ...rest }) => {
  return (
    <>
      <Nav />
      <Route component={component} {...rest} />;
    </>
  );
};

export default PublicRoute;
