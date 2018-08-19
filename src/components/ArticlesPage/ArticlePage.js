import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import articles from "./articles.json";

class ArticlePage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
  	const id = this.props.match.params.id;
	  return (
	  <section id="articlesPage">	  
	  	<div className="container mt-5 mb-5" style={{minHeight: "100vh"}}>
      <Link to="/articles" className="text-dark"><i className="text-dark fas fa-angle-left "></i> ВСЕ СТАТЬИ</Link>
	  	<h1 className="text-center m-5">{articles[id].title}</h1>
	  		
    		{articles[id].text}
    	</div>
    	</section>
	  );
	}
}

export default ArticlePage;