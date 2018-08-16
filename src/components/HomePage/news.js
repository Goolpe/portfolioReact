import React, { Component } from 'react';

class News extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
	    	<div className="container-fluid " id="news">
				<p className="text-white font-weight-bold">ПОСЛЕДНИЕ НОВОСТИ | <a href="" className="text-success">Все новости</a></p>

	    		<div className="row text-white">
		    		<div className="col-3">
			    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c846522/v846522612/2cc67/Tpri9nQ03dM.jpg)` } }>
							  	<div className="card-body font-weight-bold">
								    <h6 className="card-subtitle mt-5 mb-2">Date</h6>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-secondary">Comments</a>
							  	</div>
							</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c846522/v846522612/2cc7b/1EcTTvlybR8.jpg)` } }>
						  	<div className="card-body font-weight-bold">
							    <h6 className="card-subtitle mt-5 mb-2">Date</h6>
							    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="btn btn-secondary">Comments</a>
						  	</div>
						</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://sun9-1.userapi.com/c830608/v830608397/d042b/qfgSYNu1KaY.jpg)` } }>
						  	<div className="card-body font-weight-bold">
							    <h6 className="card-subtitle mt-5 mb-2">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="btn btn-secondary">Comments</a>
						  	</div>
						</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c844321/v844321415/d5eb/LOscUX_ecds.jpg)` } }>
						  	<div className="card-body font-weight-bold">
							    <h6 className="card-subtitle mt-5 mb-2">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="btn btn-secondary">Comments</a>
						  	</div>
						</div>
					</div>
	    		</div>
	    		
	    	</div>
    );
  }
}

export default News;
