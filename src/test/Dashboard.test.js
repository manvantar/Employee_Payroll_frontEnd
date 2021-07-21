import Dashboard from "../components/dashboard";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Employee form test", () => {
  
    it("givenTestIdElement_WhenRenderedEmployeeForm_ShouldContainExpectedInputElements", () => {
        const { getByTestId }  = render(<Dashboard />);
        const AppBar = getByTestId("AppBar");
        const Icon = getByTestId("IconButton");
        const Header = getByTestId("Header");
        const MenuIcon = getByTestId("MenuIcon");
        const NotificationIcon = getByTestId("NotificationIcon");
        const logout = getByTestId("logout");
        
        expect(AppBar).toBeInTheDocument();
        expect(Icon).toBeInTheDocument();
        expect(Header).toBeInTheDocument();
        expect(MenuIcon).toBeInTheDocument();
        expect(NotificationIcon).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
    })

})