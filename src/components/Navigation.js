import React, {Component} from 'react'

class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: false
    }
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark align-items-center">
        <div className="container">
          <div className="navbar-brand"><img src="logo.png" /></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { this.state.search == false ? 
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
                  <a className="dropdown-item" href="#">БИБЛИОТЕКА</a>
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
                <a href="#schedule" className="nav-link text-white">РАСПИСАНИЕ</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">ПЛАТНЫЕ ИГРЫ</a>
              </li>
              <li className="nav-item mr-2">
                <a href="#merch" className="nav-link text-white btn btn-danger rounded">МЕРЧ</a>
              </li>
               <button onClick={()=> this.setState({search: !this.state.search})} className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fas fa-search"></i>
              </button>
            </ul>
            : 
            <ul className="navbar-nav ml-auto">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                <button onClick={()=> this.setState({search: !this.state.search})} className="btn btn-outline-danger ml-2 my-2 my-sm-0" type="submit"><i className="fas fa-times"></i></button>
              </form>
            </ul>}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation