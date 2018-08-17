import React from 'react';
import News from './news';
import Schedule from './schedule';
import Arts from './arts';
import Merch from './merch';


function HomePage(props){
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

			<News />
			
			<Schedule />

			<Arts />
			
			<Merch />
		</div>
    );
}

export default HomePage;
