import React from 'react';
import {
  Link
} from 'react-router-dom';
import shop from "./shop.json"

function NewsPage(props){
	  const listItems = articles.map((article) =>
	    	<div className="card mb-5" key={article.id}>
				<div className="card-header">
			    	{article.date}
			  	</div>
			  	<div className="card-body">
				    <h5 className="card-title">{article.name}</h5>
				    <p className="card-text">{article.text}</p>
				    <Link to="/news" className="btn btn-primary">Подробнее</Link>
			  	</div>
			</div>
	  );
	  return (
    	<div className="container mt-5 mb-5">
    		<h1 className="text-center m-5">НОВОСТИ</h1>
    		<ul>{listItems}</ul>
    	</div>
	    
	  );
	}

export default NewsPage;

