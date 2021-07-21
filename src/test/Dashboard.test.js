import Dashboard from "../components/dashboard";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("DashBoard component test", () => {
  
    it("givenTestIdElement_WhenRenderedDashBoard_ShouldContainHeaderWithExpectedInputElements", () => {
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

    it("givenTestIdElement_WhenRenderedDashBoard_ShouldContainNavigationBarWithExpectedInputElements", () => {
        const { getByTestId }  = render(<Dashboard />);
        const Drawer = getByTestId("Drawer");
        const DrawerCloser = getByTestId("DrawerCloser");
        const Divider = getByTestId("Divider");
        const ListElement = getByTestId("ListElement");
        const AddElement = getByTestId("AddElement");
        const EditElement = getByTestId("EditElement");
        
        expect(Drawer).toBeInTheDocument();
        expect(DrawerCloser).toBeInTheDocument();
        expect(Divider).toBeInTheDocument();
        expect(ListElement).toBeInTheDocument();
        expect(AddElement).toBeInTheDocument();
        expect(EditElement).toBeInTheDocument();
    })

})