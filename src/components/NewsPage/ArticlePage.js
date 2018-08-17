import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
import articles from "./news.json";

function ArticlePage (props,match){
    return (
	    	<div className="container-fluid " id="news">
	    		<div className="row text-white">
	    		<div className="card mb-5">
						<div className="card-header">
					  	</div>
					</div>
	    		</div>
	    	</div>
    );
}

export default ArticlePage;