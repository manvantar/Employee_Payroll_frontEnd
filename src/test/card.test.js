import React from "react";
import SimpleCard from "../components/card";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Employee form test", () => {
  let employee = {
    firstName: "Kumar",
    lastName: "Vicks2",
    emailId: "KumarTester@test.in",
    city: "Bengaluru",
    salary: 9080,
    mobile: 9088998555,
    company: "wipro",
    designation: "manager",
  };

  it("givenTestIdElement_WhenRenderedCardComponent_ShouldContainExpectedElements", () => {
    const { getByTestId } = render(<SimpleCard employee={employee} />);
    const firstName = getByTestId("FirstName");
    const lastName = getByTestId("LastName");
    const email = getByTestId("email");
    const city = getByTestId("location");
    const mobile = getByTestId("mobile");
    const salary = getByTestId("salary");
    const company = getByTestId("company");
    const designation = getByTestId("jobTitle");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(mobile).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(designation).toBeInTheDocument();
  });

  it("givenTestIdElement_WhenRenderedCardComponent_ShouldContainExpectedElements", () => {
    const { getByTestId } = render(<SimpleCard employee={employee} />);
    const editIcon = getByTestId("editIcon");
    const deleteIcon = getByTestId("deleteIcon");

    expect(editIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });
});
