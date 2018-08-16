import React, {Component} from 'react'

class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark align-items-center">
        <div className="container">
          <div className="navbar-brand"><img src="logo.jpg" /></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="bg-transparent border-0 nav-link text-white">ГЛАВНАЯ</button>
              </li>
              <li className="nav-item">
                <button className="bg-transparent border-0 nav-link text-white">О ПРОЕКТЕ</button>
              </li>
              <li className="nav-item dropdown">
                <a className="bg-transparent border-0 nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  НАВИГАЦИЯ
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">АРТЫ</a>
                  <a className="dropdown-item" href="#">ДОКУМЕНТЫ</a>
                  <a className="dropdown-item" href="#">МЕМЫ</a>
                  <a className="dropdown-item" href="#">ОБЪЯВЛЕНИЯ</a>
                  <a className="dropdown-item" href="#">ОПРОСЫ</a>
                  <a className="dropdown-item" href="#">ПЕРЕВОДЫ</a>
                  <a className="dropdown-item" href="#">СТАТЬИ</a>
                  <a className="dropdown-item" href="#">СТРИМЫ</a>
                  <a className="dropdown-item" href="#">РЕЗЮМЕ</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="/work" className="nav-link text-white">РАСПИСАНИЕ</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">БИБЛИОТЕКА</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">ПЛАТНЫЕ ИГРЫ</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white btn btn-danger rounded">МЕРЧ</a>
              </li>
              <li className="nav-item">
                <a className="ml-2 mr-2" href="https://github.com/Goolpe" target="_blank" rel="noopener noreferrer">
                  <i className="text-white fab fa-github fa-2x" ></i>
                </a>
                <a href="https://www.linkedin.com/in/artur-khabirov-188b7a10a/" target="_blank" rel="noopener noreferrer">
                  <i className="text-white fab fa-linkedin fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation