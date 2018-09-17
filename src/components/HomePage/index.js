import React, {Component} from 'react';

class HomePage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="HomePage">
				<div className="wrapper text-center text-white">
					<div className="d-flex justify-content-center ">
						<h1 className="align-self-center font-weight-bold"><span>ARTUR | DEV</span></h1>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage;