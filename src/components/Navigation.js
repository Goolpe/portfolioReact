import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends Component{
     constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div className="header_works">
          <div className="header__wrapper">
            <Navbar color="light" className="bg-Nav" light expand="lg">
              <div className="container">
                <NavbarBrand tag={Link} to="/" className="navbar-brand"><img src="../logo.png" alt="ГЛАВНАЯ"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to="/" className="bg-transparent border-0 nav-link text-white">ГЛАВНАЯ</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/about-project" className="bg-transparent border-0 nav-link text-white">О ПРОЕКТЕ</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle className="text-white" nav caret>НАВИГАЦИЯ</DropdownToggle>
                      <DropdownMenu  className="p-0">
                        <DropdownItem tag={Link} to="/library" className="p-2 rounded-top">БИБЛИОТЕКА</DropdownItem> 
                        <DropdownItem tag={Link} to="/masters" className="p-2">РЕЗЮМЕ МАСТЕРОВ</DropdownItem>
                        <DropdownItem tag={Link} to="/art" className="p-2">АРТ</DropdownItem>
                        <DropdownItem tag={Link} to="/support" className="p-2 rounded-bottom">ПОДДЕРЖАТЬ ПРОЕКТ</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <NavLink tag={Link} to="/streams" className="nav-link text-white">СТРИМЫ</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/articles" className="nav-link text-white">СТАТЬИ</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/shop" className="nav-link text-white btn btn-danger rounded">МАГАЗИН</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </div>
        </div>
    )
  }
}

export default Navigation