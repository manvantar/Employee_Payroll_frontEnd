import { shallow } from "enzyme";
import App from "../App";
import React from "react";
import { Route } from "react-router";
import Signup from "../pages/register";
import Login from "../pages/login";
import ProtectedRoute from "../components/protectedRoute";
import dashboard from "../components/dashboard";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("given_/login_path_WhentestedforRoutingElement_ShouldRenderLoginPage", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/login"]).toBe(Login);
  });

  it("given_/_path_WhentestedforRoutingElement_ShouldRenderRegistrationPage", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/"]).toBe(Signup);
  });

  it("given_/register_path_WhentestedforRoutingElement_ShouldRenderRegistrationPage", () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/register"]).toBe(Signup);
  });

  it("given_/dashboard_path_WhentestedforRoutingElement_ShouldRenderDashboardComponent", () => {
    const pathMap = wrapper.find(ProtectedRoute).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap["/dashboard"]).toBe(dashboard);
  });
});