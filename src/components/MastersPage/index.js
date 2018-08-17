import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import mastersJSON from "./mastersJSON.json";

class Masters extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
	const masters = mastersJSON.map((thing, index) =>
			<div className="col-4 mb-5" key={thing.id}>
				<Link to={`/master/${thing.name + "-" + index}`} className="text-white">
					<div className="wrapper"  style={ { backgroundImage: `url(${thing.picture})` } }>
						<div className="card d-flex align-items-center justify-content-center" >
						  <h1 style={{textShadow: 'red 0 0 3px'}}>{thing.name.toUpperCase()}</h1>
						</div>
					</div>
				</Link>
			 </div>
			)	
    return (
	    	<section id="masters" className="pb-5 pt-5">
	    		<div id="carouselControls" data-interval="3000" className="carousel slide" data-ride="carousel">
	    		<div className="container text-center">
				<h1 className="text-center m-5">РЕЗЮМЕ МАСТЕРОВ</h1>
					<div className="row">
					 	{masters}
					</div>
				</div>
				</div>
	    	</section>
    );
}
}

export default Masters;