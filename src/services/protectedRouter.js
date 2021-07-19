import React from "react";
import { Router } from "react-router-dom";
import auth from "./auth";

const ProtectedRouter = ({ component: Component, ...rest }) => {
  return (
    <Router
      {...rest}
      render={(props) => {
        // if (auth.isAuthenticated()) {
          return <component {...props} />;
        // } else {
        //   return <div></div>;
        // }
      }}
    />
  );
};

export default ProtectedRouter;
