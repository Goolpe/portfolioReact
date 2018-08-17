import React from 'react';
import {
  Link
} from 'react-router-dom';

function Channels(props){
    return (
    	<section id="channels">
	    	<div className="container-fluid">
				<div class="row">
					<div class="col-6 bg-danger text-center pb-5">
				    		<h1 className="mt-5 text-white"><i className="fab fa-youtube"></i> YOUTUBE</h1>
				    		<iframe width="70%" height="340" src="http://www.youtube.com/embed?max-results=1&controls=1&rel=0&listType=user_uploads&list=objectivitytime" frameborder="0" allowfullscreen></iframe>
						</div>

					<div class="col-6 bg-info text-center  pb-5" >
				    		<h1 className="mt-5 text-white"><i className="fab fa-twitch"></i> TWITCH</h1>
				    		<iframe
							    src="http://player.twitch.tv/?channel=random_rules"
							    width="70%" height="340"
							    frameborder="0"
							    allowfullscreen>
							</iframe>
		    		</div>
				</div>
	    	</div>
	    </section>
    );
}

export default Channels;
