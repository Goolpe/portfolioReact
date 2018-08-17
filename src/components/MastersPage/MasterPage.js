import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import mastersJSON from "./mastersJSON.json";

class MasterPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
  	const id = parseInt(this.props.match.params.id.replace(/\D+/g,""));
	  return (
	  <section id="articlesPage">	  
	  	<div className="container mt-5 mb-5">
  	  	<Link to="/masters" className="text-dark"><i className="text-dark fas fa-angle-left "></i> ДРУГИЕ МАСТЕРА</Link>
        <h1 className="text-center mb-5">{mastersJSON[id].name}</h1>
  	  	<h3 className="mb-3">Контакты:</h3>
            <p><span className="font-weight-bold">Discord</span> - {mastersJSON[id].discord}<br />
        <span className="font-weight-bold">Skype</span> - {mastersJSON[id].skype}<br />
        </p>
        <p>
          Водит на канале с {mastersJSON[id].date}<br />
          {mastersJSON[id].paidGames ? "Водит" : "Не водит"} платные игры<br />
        </p>
        <h3 className="mb-3">О себе:</h3>
        <p>{mastersJSON[id].text}</p>
        <h3 className="mb-3">Любимые системы:</h3><p>{mastersJSON[id].systems}</p>
        <h3 className="mb-3">Любимые сеттинги:</h3><p>{mastersJSON[id].setting}</p>
        <h3 className="mb-3">Примеры игр:</h3>
        <iframe
          title={mastersJSON[id].skype}
            src={mastersJSON[id].example}
            width="70%" 
            height="340"
            frameBorder="0"
            allowFullScreen>
        </iframe>
    	</div>
    	</section>
	  );
	}
}

export default MasterPage;