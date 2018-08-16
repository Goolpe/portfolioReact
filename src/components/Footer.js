import React, { Component } from 'react';

class Footer extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
	    	<footer>
	    		<div className="container pt-5 pb-5 text-center">
	    			<h2>RANDOM RULES В СОЦСЕТЯХ: 
						<a href="" className="text-dark"><i className="fab fa-vk mr-2"></i></a>
						<a href="" className="text-dark"><i className="fab fa-discord mr-2"></i></a>
						<a href="" className="text-dark"><i className="fab fa-youtube mr-2"></i></a>
						<a href="" className="text-dark"><i className="fab fa-patreon mr-2"></i></a>
					</h2>
					<a href="">Поддержать на patreon</a>
					<p>&copy; Random Rules, 2018, ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
	    		</div>
				
	    	</footer>
    );
  }
}

export default Footer;
