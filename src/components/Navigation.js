import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: false
    }
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-Nav shadow align-items-center">
        <div className="container">
          <Link to="/" className="navbar-brand"><img src="logo.png" alt="ГЛАВНАЯ"/></Link>
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
              <li className="nav-item dropdown">
                <a className="btn bg-transparent border-0 nav-link text-white dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  НАВИГАЦИЯ
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/library" className="dropdown-item">БИБЛИОТЕКА</Link>
                  <Link to="/art" className="dropdown-item">АРТ/МЕМЫ</Link>
                  <Link to="/library" className="dropdown-item">ПЛАТНЫЕ ИГРЫ</Link>
                  <Link to="/library" className="dropdown-item">ДОКУМЕНТЫ</Link>
                  <Link to="/library" className="dropdown-item">ОБЪЯВЛЕНИЯ</Link>
                  <Link to="/library" className="dropdown-item">ОПРОСЫ</Link>
                  <Link to="/library" className="dropdown-item">ПЕРЕВОДЫ</Link>
                  <Link to="/library" className="dropdown-item">СТАТЬИ</Link>
                  <Link to="/library" className="dropdown-item">РЕЗЮМЕ</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/streams" className="nav-link text-white">СТРИМЫ</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link text-white">НОВОСТИ</Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/shop" className="nav-link text-white btn btn-danger rounded">МАГАЗИН</Link>
              </li>
               <button onClick={()=> this.setState({search: !this.state.search})} className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fas fa-search"></i>
              </button>
            </ul>
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation