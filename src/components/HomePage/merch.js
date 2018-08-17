import React from 'react';

function Merch(props){
    return (
	    	<section id="merch">
	    		<div className="container pt-5 pb-5">
					<h1 className="text-dark text-center m-5">Мерч Random Rules</h1>
					<div className="row">
						<div className="col-4">
							<div className="card text-center">
							  <img className="card-img-top" src="https://pp.userapi.com/c846321/v846321544/ac221/5xft3axiWoM.jpg" alt="Футболка1" />
							  <div className="card-body">
							    <h5 className="card-title">Футболка RR #1</h5>
							    <ul className="list-group list-group-flush">
								    <li className="list-group-item">1 025 руб.</li>
								</ul>
								<br />
							    <a href="#" className="btn btn-secondary">Заказать</a>
							  </div>
							</div>
						</div>
						<div className="col-4">
							<div className="card text-center">
							  <img className="card-img-top" src="https://pp.userapi.com/c849416/v849416544/3a309/oEt7ZyDAIik.jpg" alt="Футболка2" />
							  <div className="card-body">
							    <h5 className="card-title">Футболка RR #2</h5>
							    <ul className="list-group list-group-flush">
								    <li className="list-group-item">815 руб.</li>
								</ul>
								<br />
							    <a href="#" className="btn btn-secondary">Заказать</a>
							  </div>
							</div>
						</div>
						<div className="col-4">
							<div className="card text-center">
							  <img className="card-img-top" src="https://pp.userapi.com/c846420/v846420544/a9bc2/AtnhRYckCwo.jpg" alt="Чехол" />
							  <div className="card-body">
							    <h5 className="card-title">Чехол для телефона</h5>
							    <ul className="list-group list-group-flush">
								    <li className="list-group-item">820 руб.</li>
								</ul>
								<br />
							    <a href="#" className="btn btn-secondary">Заказать</a>
							  </div>
							</div>
						</div>
					</div>
				</div>
	    	</section>
    );
}

export default Merch;
