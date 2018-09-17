import React, {Component} from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

class About extends Component{
	render(){
		return(
			<section id="About" style={{background: "#313438"}}>
				<div className="container text-center" >
					<h1 className="text-muted display-1 pt-5">ABOUT ME</h1>
					<h2 className="text-muted" style={{marginTop: "200px"}}><span className="text-success font-weight-bold">Hello, I’m Artur</span>, web-developer based on Russia.<br/>
					I have experience in web site design & building
					and customization. <br/> Also I am good at <span className="text-success font-weight-bold">html, css, 
					javascript, react/redux, bootstrap 4.</span></h2>
					<a href="https://drive.google.com/file/d/19JZKoj07JXDcXXVxltXzKr5bAzXOhJ6R/view?usp=sharing" className="btn btn-secondary shadow mt-5 p-3 rounded-0" target="_blank">Download CV</a>
					<a href="https://github.com/goolpe" target="_blank" className="btn btn-secondary shadow mt-5 p-3 ml-3 rounded-0"><FaGithubAlt color="white" size="1.2em"/></a>
					<a href="https://www.linkedin.com/goolpe" target="_blank" className="btn btn-secondary shadow mt-5 p-3 ml-3 rounded-0"><FaLinkedinIn color="white" size="1.2em"/></a>
				</div>
			</section>
		)
	}
}

export default About;