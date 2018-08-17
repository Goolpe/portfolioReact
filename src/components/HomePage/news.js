import React from 'react';
import {
  Link
} from 'react-router-dom';
import articles from "../NewsPage/news.json"

function News(props){
	 const listItems = articles.map((article)=>
		    		<div className="col-3" key={article.id}>
						<div className="card rounded-0" style={ { backgroundImage: `url(${article.picture})` } }>
						  	<div className="card-body font-weight-bold">
							    <h6 className="card-subtitle mb-2 text-muted">{article.date}</h6>
							    <h5 className="card-title">{article.name}</h5>
							    <p className="card-text">{article.text.slice(0,100)}</p>
							    <Link to={`/news/${article.id}`} className="btn btn-info">Подробнее</Link>

						  	</div>
						</div>	
					</div>
				).slice(0,4);
    return (
	    	<div className="container-fluid pt-5" id="news">
				<p className="text-white font-weight-bold">ПОСЛЕДНИЕ НОВОСТИ | <Link to="/news" className="text-info">Все новости</Link></p>
	    		<div className="row text-white">
	    			{listItems}
	    		</div>
	    	</div>
    );
}

export default News;
