import React, { Component } from 'react';
import {
	BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import articles from "./articles.json";

class ArticlesPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
	  const listItems = articles.map((article) =>
	    	<div className="card mb-5" key={article.id}>
			  	<div className="card-body">
			  		<div className="row">
			  			<div className="col-3">
			  				<img src={article.picture} alt="" />
			  			</div>
			  			<div className="col">
			  				<h5 className="card-title">{article.name}</h5>
						    <p className="card-text ">{article.text}</p>
						    <Link to="/articles" className="btn btn-info">Читать дальше</Link>
						</div>
			  		</div>
			  		
				    
			  	</div>
			  	<div className="card-footer text-primary">
			    	<div className="row">
			    		<div className="col-6 text-muted">{article.date}</div>
			    		<div className="col text-right">{article.hashtags}</div>
			    	</div>
			  	</div>	
			</div>
	  );
	  return (
	  <section id="articlesPage">	  
	  	<div className="container mt-5 mb-5">
    		<h1 className="text-center m-5">СТАТЬИ</h1>
    		<ul>{listItems}</ul>
    	</div>
    	</section>
	  );
	}
}
export default ArticlesPage;


