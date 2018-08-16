import React, { Component } from 'react';

class Footer extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
	    	<footer>
	    		<div className="container pt-5 pb-2 text-center text-white">
	    			<h2 className="mb-5 mt-5">RANDOM RULES В СОЦСЕТЯХ: 
						<a href="" className="text-primary"><i className="fab fa-vk ml-4 mr-4"></i></a>
						<a href="" className="text-info"><i className="fab fa-discord mr-4"></i></a>
						<a href="" className="text-danger"><i className="fab fa-youtube mr-4"></i></a>
						<a href="" className="text-white"><i className="fab fa-patreon mr-4"></i></a>
					</h2>
					<a href="">Поддержать на patreon</a>
					<p>&copy; Random Rules, 2018, ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
	    		</div>
				
	    	</footer>
    );
  }
}

export default Footer;
