import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import {Loader} from 'react-loaders';

class LibraryPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      loader: true
    }
  }
  
  componentDidMount() {
    window.scrollTo(0,0);
    setTimeout(() => {
      this.setState({
        loader: false
      });
    },2000);
  }
  render(){	
    return (
    	<section id="library" className="bg-dark">
      <div className="container text-center text-white" style={{height: "100vh"}}>
        <h1 className="pt-5">БИБЛИОТЕКА</h1>
        {this.state.loader ? <div className="d-flex justify-content-center align-items-center" style={{marginTop: "300px"}}><Loader type="pacman"/></div>
          :
          <iframe src="https://drive.google.com/embeddedfolderview?id=1GuOYFvCyuJeZnYu7KweeKsE71hcFNjpB#grid" style={{color:"white"}} width="100%" height="100%" frameBorder="0"></iframe>}
      </div>
      </section>
    );
}
}

export default LibraryPage;

