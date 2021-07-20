import { shallow } from "enzyme";
import Register from "../pages/register";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Login test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it("given(h1)Element_WhenRegisterPageShallowed_ShouldContainExpectedValues", () => {
    expect(wrapper.find("h1").text()).toContain("EMPLOYEE PAYROLL");
  });

  it("given(h2)Element_WhenRegisterPageShallowed_ShouldContainExpectedValues", () => {
    expect(wrapper.find("h2").text()).toContain("REGISTRATION");
  });
});

describe("Register Page Elements availabity test", () => {
  it("givenTestIdElement_WhenRegisterPageRendered_ShouldContainThoseElements", () => {
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

  it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedElementValue", () => {
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
