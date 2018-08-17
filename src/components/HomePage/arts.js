import React from 'react';
import {
  Link
} from 'react-router-dom';

function Arts (props){
    return (
	    	<section id="arts">
	    		<div className="container-fluid text-white">
	    			<div className="row">
	    				<div className="col-6 p-0">
	    					<Link to="/art" className="text-white">
	    						<div className="card rounded-0 border-0" style={ { backgroundImage: `url(https://pp.userapi.com/c846522/v846522612/2cc67/Tpri9nQ03dM.jpg)` } }>
							  		<div className="card-body font-weight-bold pl-0">
								    	<h1 className="bg-success card-subtitle mt-5 mb-2 pl-3">АРТ</h1>
							  		</div>
								</div>
							</Link>
	    				</div>
	    				<div className="col-6 p-0">
	    					<Link to="/art" className="text-white">
	    					<div className="card rounded-0 border-0" style={ { backgroundImage: `url(https://pp.userapi.com/c837530/v837530537/410cc/1AFuRcHunJQ.jpg)` } }>
							  	<div className="card-body font-weight-bold pl-0">
								    <h1 className="bg-info card-subtitle mt-5 mb-2 pl-3">МЕМЫ</h1>
								    
							  	</div>
							</div>
							</Link>
	    				</div>
	    				<div className="col-6 p-0">
	    					<Link to="/art" className="text-white">
	    					<div className="card rounded-0 border-0" style={ { backgroundImage: `url(https://pp.userapi.com/c844321/v844321415/d617/VvyY4yxfLQc.jpg)` } }>
							  	<div className="card-body font-weight-bold pl-0">
								    <h1 className="bg-secondary card-subtitle mt-5 mb-2 pl-3">СТАТЬИ</h1>
								    
							  	</div>
							</div>
							</Link>
	    				</div>
	    				<div className="col-6 p-0">
	    					<Link to="/art" className="text-white">
	    					<div className="card rounded-0 border-0" style={ { backgroundImage: `url(https://pp.userapi.com/c845421/v845421486/b4c46/KW2bbOiQsWY.jpg)` } }>
							  	<div className="card-body font-weight-bold pl-0">
								    <h1 className="bg-danger card-subtitle mt-5 mb-2 pl-3">СТРИМЫ</h1>
								   
							  	</div>
							</div>
							</Link>
	    				</div>
	    			</div>
	    		</div>
				
	    	</section>
    );
}

export default Arts;
