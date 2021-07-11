import '../../scss/navbar.scss';
import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component{
    state= {clicked: false}

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems" >
                <h1 className="navbar-logo">  Employee Payroll<i className="fab fa-react"> </i></h1>
                    <div className="menu-icon" onClick={this.handleClick}><MenuIcon/>
                        <i className={this.state.clicked? <MenuIcon/>: <MenuIcon/>}></i>
                    </div>
                <ul>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;