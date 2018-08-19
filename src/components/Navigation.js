import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navigation extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownLoginOpen: false,
      search: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  toggleLogin() {
    this.setState(prevState => ({
      dropdownLoginOpen: !prevState.dropdownLoginOpen
    }));
  }
  render(){
    return(
      <div className="header_works">
          <div className="header__wrapper">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-Nav shadow align-items-center">
        <div className="container">
          <Link to="/" className="navbar-brand"><img src="../logo.png" alt="ГЛАВНАЯ"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { this.state.search ? 
            <ul className="navbar-nav ml-auto">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                <button onClick={()=> this.setState({search: !this.state.search})} className="btn btn-outline-danger ml-2 my-2 my-sm-0" type="submit"><i className="fas fa-times"></i></button>
              </form>
            </ul>
            :
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
                <Link to="/" className="bg-transparent border-0 nav-link text-white">ГЛАВНАЯ</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-project" className="bg-transparent border-0 nav-link text-white">О ПРОЕКТЕ</Link>
              </li>
               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret className="btn bg-transparent border-0 nav-link text-white">
                    НАВИГАЦИЯ
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to="/library" className="pl-0 dropdown-item ">БИБЛИОТЕКА</Link></DropdownItem>
                    <DropdownItem><Link to="/masters" className="pl-0 dropdown-item">РЕЗЮМЕ МАСТЕРОВ</Link></DropdownItem>
                    <DropdownItem><Link to="/art" className="pl-0 dropdown-item">АРТ</Link></DropdownItem>
                    <DropdownItem><Link to="/library" className="pl-0 dropdown-item">ПЛАТНЫЕ ИГРЫ</Link></DropdownItem>
                    <DropdownItem><Link to="/library" className="pl-0 dropdown-item">ПОДДЕРЖАТЬ ПРОЕКТ</Link></DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              <li className="nav-item">
                <Link to="/streams" className="nav-link text-white">СТРИМЫ</Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link text-white">СТАТЬИ</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-white btn btn-danger rounded">МАГАЗИН</Link>
              </li>
              {/*<button onClick={()=> this.setState({search: !this.state.search})} className="btn btn-outline-light my-2 my-sm-0" type="submit">
                <i className="fas fa-search"></i>
              </button> 
              
              <Dropdown isOpen={this.state.dropdownLoginOpen} toggle={this.toggleLogin}>
                  <DropdownToggle className="ml-2 bg-transparent border-0">
                    <i className="fas fa-sign-in-alt fa-2x"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to="/registration" className="pl-0 dropdown-item">Регистрация</Link></DropdownItem>
                    <DropdownItem><Link to="/login" className="pl-0 dropdown-item">Вход</Link></DropdownItem>
                  </DropdownMenu>
              </Dropdown> */}
            </ul>
            }
          </div>
        </div>
      </nav>
                </div>
        </div>
    )
  }
}

export default Navigation