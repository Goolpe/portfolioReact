import React, { Component } from 'react';
import {
	BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import articles from "./news.json";
import ArticlePage from './ArticlePage';

class NewsPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
	  const listItems = articles.map((article) =>
	    	<div className="card mb-5" key={article.id}>
				<div className="card-header">
			    	{article.date}
			  	</div>
			  	<div className="card-body">
				    <h5 className="card-title">{article.name}</h5>
				    <p className="card-text">{article.text}</p>
				    <Link to={`/news/${article.id}`}>Подробнее</Link>
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
}
export default NewsPage;


