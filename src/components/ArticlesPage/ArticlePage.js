import React, { Component } from 'react';
import axios from "axios";
import {
    Link,
} from 'react-router-dom';

class ArticlePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
    const id = this.props.match.params.id
    axios.get("//localhost:3333/articles/" + id)
    .then(res => this.setState({articles: res.data}))
  }
  render() {
	  return (
	  <section id="articlesPage">	  
	  	<div className="container mt-5 mb-5" style={{minHeight: "100vh"}}>
      <Link to="/articles" className="text-dark"><i className="text-dark fas fa-angle-left "></i> ВСЕ СТАТЬИ</Link>
	  	<h1 className="text-center m-5">{this.state.articles.title}</h1>
        <div className="row">
          <div className="col-12 col-md-4 order-md-2">
          <img className="img-fluid" alt={this.state.articles.title} src={this.state.articles.picture} />
          </div>
          <div className="col-12 col-md-8">
          <p>{this.state.articles.text}</p>
          </div>
        </div>
    	</div>
    	</section>
	  );
	}
}

export default ArticlePage;