import React, {Component} from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

class About extends Component{
	render(){
		return(
			<section id="About" style={{background: "#313438"}}>
				<div className="container text-center" >
					<h1 className="text-muted display-1 pt-5">ABOUT ME</h1>
					<h2 className="text-muted mb-5" style={{marginTop: "100px"}}><span className="text-success">Hello, I’m Artur</span>, web-developer based in Russia.<br/>
					I have experience in web site design & building
					and customization. <br/> Also I am good at <span className="text-success">html, css, 
					javascript, react/redux, bootstrap 4.</span></h2>
					<hr/>
					<div className="text-white row mt-5 text-left">
						<div className="col-12 col-md-6">
							<h2>Experience</h2>
							<div className="bg-dark shadow p-3 mt-3">
								<h5>Frontend Developer</h5>
								<p className="text-secondary">July 2017 - May 2018 | Pravo comp.</p>
								<p>Website development, maintain the product and advertising company in social media.<br/>
								Technology stack:<br/>
								- React.js - HTML5/CSS3 - Bootstrap 4 - Javascript - Photoshop.</p>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<h2>Education</h2>
							<div className="bg-dark shadow p-3 mt-3">
								<h5>Ufa State Petroleum Technological University</h5>
								<p className="text-secondary">2012 – 2017 | Ufa, Russia</p>
								<p>Bachelor's degree in Applied Informatics</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About;