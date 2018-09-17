import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { FiUser, FiEye} from "react-icons/fi";
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
						<li className="pb-3 pt-3"><Link to="/">G</Link></li>
						<li className="pb-2 pt-2" id="TooltipHome"><Link to="/" ><FaHome color="white" size="1.2em"/></Link></li>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipHome">
					        Home
					    </UncontrolledTooltip>
						<li className="pb-2 pt-2" id="TooltipAbout"><Link to="/about"><FiUser color="white" size="1.2em"/></Link></li>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipAbout">
					        About
					    </UncontrolledTooltip>
						<li className="pb-2 pt-2" id="TooltipPortfolio"><Link to="/works"><FiEye color="white" size="1.2em"/></Link></li>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipPortfolio">
					        Portfolio
					    </UncontrolledTooltip> 
					</ul>
					<ul className="text-center">
						<li className="pb-2 pt-2" id="TooltipGithub"><a href="https://github.com/goolpe" target="_blank"><FaGithubAlt color="white" size="1.2em"/></a></li>
						<UncontrolledTooltip className="ml-1" placement="right" target="TooltipGithub">
					        Github
					    </UncontrolledTooltip>
						<li className="pb-2 pt-2" id="TooltipLinkedin"><a href="https://www.linkedin.com/goolpe" target="_blank"><FaLinkedinIn color="white" size="1.2em"/></a></li>
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