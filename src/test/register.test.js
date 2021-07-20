import { shallow } from "enzyme";
import Register from "../pages/register";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Login test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it("render h1 tag text", () => {
    expect(wrapper.find("h1").text()).toContain("EMPLOYEE PAYROLL");
  });

  it("render h2 tag text", () => {
    expect(wrapper.find("h2").text()).toContain("REGISTRATION");
  });
});

describe("Register Page Elements availabity test", () => {
  it("check elements available", () => {
    const { getByTestId } = render(<Register />);
    const logo = getByTestId("avatar");
    const form = getByTestId("form");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const confirmPassword = getByTestId("confirmPassword");
    const button = getByTestId("submitButton");

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
  });

  it("check Register page elements value", () => {
    const { getByTestId } = render(<Register />);
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const confirmPassword = getByTestId("confirmPassword");

    expect(firstName).toHaveTextContent("First Name");
    expect(lastName).toHaveTextContent("Last Name");
    expect(email).toHaveTextContent("Email Address");
    expect(password).toHaveTextContent("Password");
    expect(confirmPassword).toHaveTextContent("Confirm Password");
    expect(button).toHaveTextContent("Register");
  });
});
