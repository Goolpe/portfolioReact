import React, { Component } from 'react';
import Articles from './articles';
import Schedule from './schedule';
import Arts from './arts';
import Merch from './merch';
import Reviews from './reviews';
import Social from './social';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render(){
    return (
    	<div>
	    	<div id="header" className="carousel slide" data-interval="3000" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100" src="headerBG.jpg" alt="First slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="headerBG2.jpg" alt="Second slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="headerBG3.jpg" alt="Third slide" />
			    </div>
			  </div>
			   <a className="carousel-control-prev" href="#header" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#header" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>

			<Articles />
			
			<Schedule className="pt-5"/>

			<Arts />
			
			<Merch />

			<Social />

			<Reviews />
		</div>
    );
}
}
export default HomePage;
