import React, {Component} from 'react';
import works from './works.json';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

class Work extends Component{
	constructor(props){
		super(props);
		this.state={
			work: works.find(work=> work.id == this.props.match.params.id)
		}
	}
	render(){
		const work = this.state.work;
	return(
		<section id="Work" style={{background: "#20232c"}}>
			<div className="container text-center" >
				<h1 className="text-muted display-1 pt-5">{work.title.toUpperCase()}</h1>
				<Nav>
		          <NavItem>
		            	<Link className="nav-link" to="/works"><FaAngleLeft/>Back to portfolio</Link>
		          </NavItem>
		        </Nav>
		        <div className="row text-white">
		        	<div className="col-12 col-md-4 mt-4" >
			        	<Card className="bg-dark shadow mb-4">
					        <div style={{height:"200px", overflow: "hidden"}}><CardImg top width="100%" src={work.picture} alt="Card image cap" /></div>
					        <CardBody className="text-left">
					          <CardTitle>{work.title}</CardTitle>
					        </CardBody>
					    </Card>
					    <p>{work.date}</p>
					    <a href={work.github} className="btn btn-dark shadow" rel="noopener noreferrer" target="_blank">Github</a>
					    <a href={work.url} className="btn btn-dark shadow ml-2" rel="noopener noreferrer" target="_blank">Website</a>
		        	</div>
		        	<div className="col-12 col-md-8 mt-4">
		        		<p>{work.text}</p>
		        	</div>
		        </div>		        
			</div>
		</section>
	)
}
}

export default Work;