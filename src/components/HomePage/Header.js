import React from 'react';

function Header (props){
	return(
		<section id="Header">
			<div className="wrapper text-center text-white">
				<div className="d-flex justify-content-center ">
					<h1 className="align-self-center font-weight-bold"><span>ARTUR | DEV</span></h1>
					<p className="position-absolute m-auto bg-transparent">Scroll<br/>
						<i className="fas fa-angle-double-down fa-3x"></i>
					</p>
				</div>
				
			</div>
		</section>
	)
}

export default Header;