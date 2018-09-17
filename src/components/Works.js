import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Works (props){
	return(
		<section id="Works" style={{background: "#20232c"}}>
			<p>Works</p>
			<div className="container">
				<div className='pageOption'>
				  <a href='#' className='option'>
				    <img src='../constr.jpeg' />
				  </a>
				  <a href='#' className='option'>
				    <img src='../constr.jpeg' />
				  </a>
				</div>
		    </div>
		</section>
	)
}

export default Works;