import React, { Component } from 'react';
import mastersJSON from "./mastersJSON.json"

class Masters extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
	const masters = mastersJSON.map((thing) =>
			<div className="card" key={thing.id}>
			    <div className="card-header" id={"heading" + thing.id}>
			      <h5 className="mb-0">
			        <button className={thing.id === 0 ? "btn bg-transparent w-100" : "btn bg-transparent w-100 collapsed"} type="button" data-toggle="collapse" data-target={"#collapse" + thing.id} aria-expanded={thing.id === 0 ? "true" : "false"} aria-controls={"collapse" + thing.id}>
			          <h1 className="text-left">{thing.name}</h1>
			        </button>
			      </h5>
			    </div>

			    <div id={"collapse" + thing.id} className={thing.id === 0 ? "collapse show" : "collapse"} aria-labelledby={"heading" + thing.id} data-parent="#accordionMasters">
			      <div className="card-body text-left">
			        
			        <h3 className="mb-3">Контакты:</h3>
			        <p><span className="font-weight-bold">Discord</span> - {thing.discord}<br />
					<span className="font-weight-bold">Skype</span> - {thing.skype}<br />
					</p>
					<p>
						Водит на канале с {thing.date}<br />
						{thing.paidGames ? "Водит" : "Не водит"} платные игры<br />
					</p>
					<h3 className="mb-3">О себе:</h3>
					<p>{thing.text}</p>
					<h3 className="mb-3">Любимые системы:</h3><p>{thing.systems}</p>
					<h3 className="mb-3">Любимые сеттинги:</h3><p>{thing.setting}</p>
					<h3 className="mb-3">Примеры игр:</h3>
					<iframe
						title={thing.skype}
					    src={thing.example}
					    width="70%" 
					    height="340"
					    frameBorder="0"
					    allowFullScreen>
					</iframe>
			      </div>
			    </div>
			  </div>
			)	
    return (
	    	<section id="masters" className="pb-5 pt-5">
	    		<div id="carouselControls" data-interval="3000" className="carousel slide" data-ride="carousel">
	    		<div className="container text-center">
				<h1 className="text-center m-5">РЕЗЮМЕ МАСТЕРОВ</h1>
					 <div className="accordion" id="accordionMasters">
					 {masters}
					</div>
				</div>
				</div>
	    	</section>
    );
}
}

export default Masters;