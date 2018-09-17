import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { FiUser, FiEye, FiMail} from "react-icons/fi";
import { UncontrolledTooltip } from 'reactstrap';

class Navigation extends Component{
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: false
	    };
	}
	toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }
	render(){
		return(
			<div id="Navigation" className="position-absolute">
				<div className="d-flex flex-column justify-content-between" style={{height: "100%"}}>
					<ul className="text-center">
						<li className="pb-2 pt-2 text-white">G</li>
						<Link to="/" ><li className="pb-2 pt-2" id="TooltipHome"><FaHome color="white" size="1.2em"/></li></Link>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipHome">
					        Home
					    </UncontrolledTooltip>
						<Link to="/about"><li className="pb-2 pt-2" id="TooltipAbout"><FiUser color="white" size="1.2em"/></li></Link>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipAbout">
					        About
					    </UncontrolledTooltip>
						<Link to="/works"><li className="pb-2 pt-2" id="TooltipPortfolio"><FiEye color="white" size="1.2em"/></li></Link>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipPortfolio">
					        Portfolio
					    </UncontrolledTooltip> 
					    <Link to="/contacts"><li className="pb-2 pt-2" id="TooltipContacts"><FiMail color="white" size="1.2em"/></li></Link>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipContacts">
					        Contacts
					    </UncontrolledTooltip>
					</ul>
					<ul className="text-center">
						<a href="https://drive.google.com/file/d/19JZKoj07JXDcXXVxltXzKr5bAzXOhJ6R/view?usp=sharing" rel="noopener noreferrer" target="_blank"><li className="pb-2 pt-2" id="TooltipCV">CV</li></a>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipCV">
					        Curriculum vitae
					    </UncontrolledTooltip>
						<a href="https://github.com/goolpe" rel="noopener noreferrer" target="_blank"><li className="pb-2 pt-2" id="TooltipGithub"><FaGithubAlt color="white" size="1.2em"/></li></a>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipGithub">
					        Github
					    </UncontrolledTooltip>
						<a href="https://www.linkedin.com/goolpe" rel="noopener noreferrer" target="_blank"><li className="pb-2 pt-2" id="TooltipLinkedin"><FaLinkedinIn color="white" size="1.2em"/></li></a>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipLinkedin">
					        Linkedin
					    </UncontrolledTooltip>
					</ul>
				</div>
				{/*<Navbar className="bg-transparent" dark expand="md">
		          <NavbarBrand href="/">Goolpe</NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		                <NavLink href="https://www.linkedin.com/in/goolpe" target="_blank">Linkedin</NavLink>
		              </NavItem>
		              <NavItem>
		                <NavLink href="https://github.com/Goolpe" target="_blank">GitHub</NavLink>
		              </NavItem>
		              <UncontrolledDropdown nav inNavbar>
		                <DropdownToggle nav caret>
		                  Options
		                </DropdownToggle>
		                <DropdownMenu right>
		                  <DropdownItem>
		                    Option 1
		                  </DropdownItem>
		                  <DropdownItem>
		                    Option 2
		                  </DropdownItem>
		                  <DropdownItem divider />
		                  <DropdownItem>
		                    Reset
		                  </DropdownItem>
		                </DropdownMenu>
		              </UncontrolledDropdown>
		            </Nav>
		          </Collapse>
		        </Navbar>*/}

			</div>
		)
	}
}

export default Navigation;