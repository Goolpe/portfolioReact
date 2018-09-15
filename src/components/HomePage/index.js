import React, {Component} from 'react';
import About from './About';
import Header from './Header';

class HomePage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="HomePage">
				<Header />
				<About />
			</div>
		)
	}
}

export default HomePage;