import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import articles from "../ArticlesPage/articles.json"

class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
	 const listItems = articles.map((article, index)=>
		    		<div className="col-3" key={article.id}>
						<div className="card rounded-0" style={ { backgroundImage: `url(${article.picture})` } }>
						  	<div className="card-body font-weight-bold">
							    <h6 className="card-subtitle mb-2 text-muted">{article.date}</h6>
							    <h5 className="card-title">{article.name}</h5>
							    <p className="card-text">{article.text.slice(0,100)}</p>
							    <Link to={`/article/${index}`} className="btn btn-info">Читать дальше</Link>
						  	</div>
						</div>	
					</div>
				).slice(0,4);

    return (
	    	<div className="container-fluid pt-5" id="articles">
				<p className="text-white font-weight-bold">ПОСЛЕДНИЕ СТАТЬИ | <Link to="/articles" className="text-info">Все статьи</Link></p>
	    		<div className="row text-white">
	    			{listItems}
	    		</div>
	    	</div>
    );
}
}
export default Articles;
