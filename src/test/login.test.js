import { shallow, mount } from "enzyme";
import Login from "../pages/login";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Login Headers Tag test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("given(h1)Element_WhenLoginShallowed_ShouldContainExpectedValuesInLoginPage", () => {
    expect(wrapper.find("h1").text()).toContain("EMPLOYEE PAYROLL");
  });

  it("given(h2)Element_WhenLoginShallowed_ShouldContainExpectedValuesInLoginPage", () => {
    expect(wrapper.find("h2").text()).toContain("LOGIN");
  });
});

describe("Login Elements availabity test", () => {
  it("givenTestIdElement_WhenLoginPageRendered_ShouldContainThoseElementInLoginPages", () => {
    const { getByTestId } = render(<Login />);
    const logo = getByTestId("avatar");
    const form = getByTestId("form");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("button");

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedValuesInLoginPage", () => {
    const { getByTestId } = render(<Login />);
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("button");

    expect(email).toHaveTextContent("Email Address");
    expect(password).toHaveTextContent("Password");
    expect(button).toHaveTextContent("Login");
  });
});
