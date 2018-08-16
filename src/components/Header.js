import React, { Component } from 'react';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			counter: 1
		}
	}
  render() {
    return (
		<div className="header_works__head_name text-center" >
			<h1 className="display-2 font-weight-bold text-white">Artur</h1>
			<h2 className="display-2 font-weight-bold text-danger">Frontend developer</h2>
			<div className="head_name__mouse">
				<a href="#about">
					<div id="mouse">
						<div id="dot">
						</div>
					</div>
				</a>
			</div>
		</div>
    );
  }
}

export default Header;
