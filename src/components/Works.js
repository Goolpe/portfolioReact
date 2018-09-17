import React, {Component} from 'react';
import works from './works.json';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Works extends Component{
	constructor(props){
		super(props);
		this.state={
			Allactive: true,
			SPAactive: false,
			Shopactive: false
		}
	}
	render(){
		const itemList = works.filter(work=>
		this.state.Allactive && work.type ||
		this.state.SPAactive && work.type == "SPA" || 
		this.state.Shopactive && work.type == "Shop"
			).map((work,index)=>
			<div className="col-12 col-md-4 mt-4" key={index}>
				<Link to="">
					<Card className="bg-dark text-white shadow">
				        <CardImg top width="100%" src={work.picture} alt="Card image cap" />
				        <CardBody className="text-left">
				          <CardTitle>{work.title}</CardTitle>
				        </CardBody>
				    </Card>
				</Link>
			</div>
			)
	return(
		<section id="Works" style={{background: "#20232c"}}>
			<div className="container text-center" >
				<h1 className="text-muted display-1 pt-5">PORTFOLIO</h1>
				<Nav>
		          <NavItem>
		            <NavLink href="#" className={this.state.Allactive ? "text-success" : "text-white"} onClick={()=>{this.setState({Allactive: true, SPAactive: false, Shopactive: false})}}>All</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink href="#" className={this.state.SPAactive ? "text-success" : "text-white"} onClick={()=>{this.setState({Allactive: false, SPAactive: true, Shopactive: false})}}>Single page</NavLink>
		          </NavItem>
		          <NavItem>
		            <NavLink href="#" className={this.state.Shopactive ? "text-success" : "text-white"} onClick={()=>{this.setState({Allactive: false, SPAactive: false, Shopactive: true})}}>Shop</NavLink>
		          </NavItem>
		        </Nav>
		        <div className="row">
		        	{itemList}
		        </div>
		        
			</div>
		</section>
	)
}
}

export default Works;