import React, { Component } from 'react';

import {
    Link,
} from 'react-router-dom';
import articles from './articles.json';

class ArticlesPage extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
	  const listItems = articles.map((article, index) =>
	    	<div className="card mb-5" key={article.id}>
			  	<div className="card-body">
			  		<div className="row">
			  			<div className="col-3">
			  				<img src={article.picture} alt="" />
			  			</div>
			  			<div className="col">
			  				<h5 className="card-title">{article.title}</h5>
						    <p className="card-text ">{article.text}</p>
						    <Link to={`/article/${index}`} className="btn btn-info">Читать дальше</Link>
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
	  	<div className="container text-right mt-5 mb-5">
	  		{/*{this.state.newArticle ?

	  			<div className="d-flex justify-content-center align-items-center mb-5">
		    		<h1 className="text-center">СОЗДАТЬ СТАТЬЮ</h1>
					<button className="btn btn-link bg-transparent border-0" onClick={()=>this.setState({newArticle : !this.state.newArticle})}>
						 <i className="fas fa-times-circle fa-3x text-info"></i>
					</button>

				</div>
				: 
	  			<div className="d-flex justify-content-center align-items-center mb-5">
		    		
					<button className="btn btn-link bg-transparent border-0" onClick={()=>this.setState({newArticle : !this.state.newArticle})}>
						 <i className="fas fa-plus-circle fa-3x text-info"></i>
					</button>
				</div>
			}
			
			{this.state.newArticle ? <ArticleForm  /> : } */}

			<h1 className="text-center mb-5">СТАТЬИ</h1>
    		<ul className="container text-left">{listItems}</ul>
    	</div>
    	</section>
	  );
	}
}



export default ArticlesPage;


