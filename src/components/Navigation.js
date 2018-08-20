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
                    <DropdownItem className="pl-0"><Link to="/library" className="pl-4 dropdown-item ">БИБЛИОТЕКА</Link></DropdownItem>
                    <DropdownItem className="pl-0"><Link to="/masters" className="pl-4 dropdown-item">РЕЗЮМЕ МАСТЕРОВ</Link></DropdownItem>
                    <DropdownItem className="pl-0"><Link to="/art" className="pl-4 dropdown-item">АРТ</Link></DropdownItem>
                    <DropdownItem className="pl-0"><Link to="/library" className="pl-4 dropdown-item">ПЛАТНЫЕ ИГРЫ</Link></DropdownItem>
                    <DropdownItem className="pl-0"><Link to="/library" className="pl-4 dropdown-item">ПОДДЕРЖАТЬ ПРОЕКТ</Link></DropdownItem>
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
              </Dropdown> 

                      <div className="d-flex justify-content-center">
            <div className="container justify-content-start">
              <button onClick={()=>{this.setState({bigPicture: false}); console.log(this.state.bigPicture)}} className="text-center text-white border-0 p-0"></button>
              <button onClick={()=>{this.setState({namePicture: this.state.pictures[this.state.pictures.indexOf(this.state.namePicture)+1]}); console.log(this.state.bigPicture)}} className="text-center text-white border-0 p-0"></button>
              <img src={this.state.namePicture}/><i className="fas fa-times-circle fa-3x position-absolute ml-5"></i>
              <p className=" mt-2">{this.state.titlePicture}</p>
            </div>
          <button className="fas fa-times-circle fa-3x position-absolute ml-5" onClick={() => this.setState({bigPicture: this.state.pictures[this.state.pictures.indexOf(this.state.namePicture)+1]})}>1231</button>
        </div> 

const imgItems = json.response.items.map((img, index) => 
        <div className="col-3 mb-4" key={img.id}>
        {this.setState(prevState => ({
            pictures: [ ...prevState.pictures, {id: img.id, name: img.photo_604, title: img.text} ]
        }))}
          <Card style = {{height : "250px"}}>
            <button onClick={()=>{this.setState({bigPicture: true, namePicture: img.photo_604, titlePicture: img.text, idPicture: img.id })}} className="text-center border-0" title={img.text}  style={{ height:"100%", backgroundPosition: "top", backgroundImage: `url(${img.photo_604})` }}></button>
          </Card>           
        </div>
        )
        this.setState({picture: imgItems});
      })
    }

  render () {
    return (
      <div id="artpage" style={{minHeight:"100vh"}}>
       {this.state.bigPicture ? 
        <div className="blackBG">
          <div className="row align-items-center text-center text-white" style={{height: "100%"}}>
         {console.log(response)}
              <div className="col-4">
                <button onClick={()=>{this.setState({ namePicture : this.state.pictures.filter((picture) => 
                      (this.state.idPicture + 1) === picture.id)[0].name})}}
                className="fas fa-arrow-alt-circle-left fa-3x bg-transparent text-center text-white border-0 p-0"></button>
              </div>
            <div className="col-4">            
                  <div className="row">
                    <div className="col-11">
                      <img src={this.state.namePicture} className="img-fluid"/>
                      <p className=" mt-2">{this.state.titlePicture}</p>
                    </div>
                    <div className="col-1">
                      <button onClick={()=>{this.setState({bigPicture: false})}} className="fas fa-times-circle fa-3x text-center text-white bg-transparent border-0 p-0"></button>
                    </div>
                  </div>
            </div> 
            <div className="col-4">
              <button onClick={()=>{this.setState({namePicture: this.state.pictures[this.state.pictures.indexOf(this.state.namePicture)+1], titlePicture: this.state.titlePictures[this.state.titlePictures.indexOf(this.state.titlePicture)+1]})}} className="fas fa-arrow-alt-circle-right fa-3x text-center text-white bg-transparent border-0 p-0"></button>
            </div>
          </div>
        </div>
        : false}

      */}
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