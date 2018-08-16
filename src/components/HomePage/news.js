import React, { Component } from 'react';

class News extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
	    	<div className="container-fluid" id="news">
				<p className="text-white">ПОСЛЕДНИЕ НОВОСТИ <a href="">Все новости</a></p>

	    		<div className="row">
		    		<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c849424/v849424236/1f251/yebPd1ppHtY.jpg)` } }>
						  	<div className="card-body">
							    <h6 className="card-subtitle mt-5 mb-2 text-muted">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="card-link">Comments</a>
						  	</div>
						</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c849424/v849424236/1f251/yebPd1ppHtY.jpg)` } }>
						  	<div className="card-body">
							    <h6 className="card-subtitle mt-5 mb-2 text-muted">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="card-link">Comments</a>
						  	</div>
						</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c849424/v849424236/1f251/yebPd1ppHtY.jpg)` } }>
						  	<div className="card-body">
							    <h6 className="card-subtitle mt-5 mb-2 text-muted">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="card-link">Comments</a>
						  	</div>
						</div>
					</div>
					<div className="col-3">
		    			<div className="card rounded-0" style={ { backgroundImage: `url(https://pp.userapi.com/c849424/v849424236/1f251/yebPd1ppHtY.jpg)` } }>
						  	<div className="card-body">
							    <h6 className="card-subtitle mt-5 mb-2 text-muted">Date</h6>
							    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" className="card-link">Comments</a>
						  	</div>
						</div>
					</div>
	    		</div>
	    		
	    	</div>
    );
  }
}

export default News;
