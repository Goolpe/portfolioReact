import React, {Component} from 'react'

class Navigation extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-darkRemove align-items-center">
        <div className="container">
          <div className="navbar-brand m-3 ">Goolpe</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">HOME</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link text-white">ABOUT</a>
              </li>
              <li className="nav-item">
                <a href="/work" className="nav-link text-white">WORK</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">CONTACT</a>
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