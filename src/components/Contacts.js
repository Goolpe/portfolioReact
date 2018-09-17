import React, {Component} from 'react';
import { FiAtSign, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import { FaSkype } from 'react-icons/fa';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Contacts extends Component{
	render(){
		return(
			<section id="Contacts" style={{background: "#1b2026"}}>
				<div className="container text-center" >
					<h1 className="text-muted display-1 pt-5">CONTACTS</h1>
					<div className="text-white row mt-5 text-left">
						<div className="col-12 col-md-6">
							<div className="bg-dark shadow p-3 mt-4">
								<div className="d-flex">
								<FiMapPin size="3em" className="text-success mr-3"/>
								<span>
									<h5>Address</h5>
									<p className="text-muted m-0">Ufa, Russia</p>
								</span>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="bg-dark shadow p-3 mt-4">
								<div className="d-flex">
								<FiAtSign size="3em" className="text-success mr-3"/>
								<span>
									<h5>E-mail</h5>
									<p className="text-muted m-0">gooolpe@gmail.com</p>
								</span>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="bg-dark shadow p-3 mt-4">
								<div className="d-flex">
								<FiPhone size="3em" className="text-success mr-3"/>
								<span>
									<h5>Phone</h5>
									<p className="text-muted m-0">+7 987 255-62-55</p>
								</span>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="bg-dark shadow p-3 mt-4">
								<div className="d-flex">
								<FaSkype size="3em" className="text-success mr-3"/>
								<span>
									<h5>Skype</h5>
									<p className="text-muted m-0">gooolpe</p>
								</span>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-dark text-white shadow p-3 mt-4">
						<Form method="POST" action="https://formspree.io/gooolpe@gmail.com">
							<h5 className="p-3">Contact Form</h5>
							<div className="row ">
								<div className="col-12 col-md-6">
							        <FormGroup className="p-3 border-bottom">
							          <Input type="text" name="fullname" className="bg-transparent border-0 text-white" placeholder="Full Name" required />
							        </FormGroup>
						        </div>
						        <div className="col-12 col-md-6">
							        <FormGroup className="p-3 border-bottom">
							          <Input type="email" name="email" className="bg-transparent border-0 text-white" placeholder="E-mail Address" required />
							        </FormGroup>
						        </div>
					        </div>
					        <FormGroup className="p-3 border-bottom">
					          <Input type="text" name="msg" className="bg-transparent border-0 text-white" placeholder="Your Message" required />
					        </FormGroup>
					        <Button className="p-3 mt-3 bg-transparent border-0">Send Message <FiArrowRight /></Button>
					    </Form>
				    </div>
				</div>
			</section>
		)
	}
}

export default Contacts;