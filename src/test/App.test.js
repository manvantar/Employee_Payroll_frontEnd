import { shallow } from "enzyme";
import App from "../App";
import React from "react";
import { Route } from "react-router";
import Signup from "../pages/register";
import Login from "../pages/login";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("routing to login page", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/login"]).toBe(Login);
  });

  it("routing to registration page", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/"]).toBe(Signup);
  });

  it("routing to registration page", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/register"]).toBe(Signup);
  });
});
