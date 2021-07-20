
import Employee from "../components/EmployeeForm";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Employee form test", () => {
  
    it("givenTestIdElement_WhenRenderedEmployeeForm_ShouldContainExpectedInputElements", () => {
        const { getByTestId }  = render(<Employee />);
        const firstName = getByTestId("FirstName");
        const lastName = getByTestId("LastName");
        const email = getByTestId("EmailID");
        const city = getByTestId("City");
        const mobile = getByTestId("Mobile");
        const salary = getByTestId("Salary");
        const company = getByTestId("Company");
        const designation = getByTestId("Designation");

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(city).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(mobile).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(company).toBeInTheDocument();
        expect(designation).toBeInTheDocument();
    });

    it("givenTestIdElement_WhenRenderedEmployeeForm_ShouldContainExpectedElementsValue", () => {
        const { getByTestId }  = render(<Employee />);
        const firstName = getByTestId("FirstName");
        const lastName = getByTestId("LastName");
        const email = getByTestId("EmailID");
        const city = getByTestId("City");
        const mobile = getByTestId("Mobile");
        const salary = getByTestId("Salary");
        const company = getByTestId("Company");
        const designation = getByTestId("Designation");

        expect(firstName).toHaveTextContent("First Name");
        expect(lastName).toHaveTextContent("Last Name");
        expect(email).toHaveTextContent("Email");
        expect(city).toHaveTextContent("City");
        expect(mobile).toHaveTextContent("Mobile");
        expect(salary).toHaveTextContent("Salary");
        expect(company).toHaveTextContent("Company-Name");
        expect(designation).toHaveTextContent("Designation");
    });

    it("givenTestIdElement_WhenRenderedEmployeeForm_ShouldContainExpectedButtonElements", () => {
        const { getByTestId }  = render(<Employee />);
        const firstName = getByTestId("Submit");
        const lastName = getByTestId("Reset");

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
    });
});  
