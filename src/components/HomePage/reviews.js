import React from 'react';

function Reviews(props){
	const reviewsItems = [{
			id:0,
			url: "http://sport1000.ru/wp-content/uploads/2018/06/1529640857_maxresdefault-800x445.jpg",
			link: "",
			text: "ВОСХИТИТЕЛЬНО, ДРУГ!",
			name: "Джонни Депп"
		},
		{
			id:1,
			url: "https://pp.userapi.com/c841234/v841234068/248de/-NbfkIst47I.jpg",
			link: "",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo, perspiciatis voluptas magnam reiciendis necessitatibus facere neque quo ab reprehenderit fugiat adipisci aspernatur libero quos excepturi, cum veniam aut ipsum.",
			name: "Сергей Брин"
		},
		{
			id:2,
			url: "https://pp.userapi.com/c844321/v844321415/d617/VvyY4yxfLQc.jpg",
			link: "",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis quod illum quas vel optio molestiae magnam! Dolorum labore iste, laboriosam debitis doloremque eveniet similique deleniti qui. Eos sint, illo.",
			name: "Человек Паук"
		},
		{
			id:3,
			url: "https://pp.userapi.com/c845421/v845421486/b4c46/KW2bbOiQsWY.jpg",
			link: "",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ea ipsa sed consectetur nihil, esse ex blanditiis reprehenderit! Repellendus officia, aliquid reiciendis modi architecto quaerat quisquam accusamus! Corporis, delectus sunt.",
			name: "Джон Уик"
		}]
		const reviews = reviewsItems.map((thing) =>
			<div className={thing.id == 0 ? "active carousel-item" : "carousel-item"} key={thing.id} >
		      <div className="card">
				  <div class="row">
				  	<div class="col-3"><img className="card-img-top" src={thing.url} alt="Card image cap" /></div>
				  	<div class="col">
				  		<div className="card-body">
				    		<p className="card-text">{thing.text}</p>
				    		<h2>{thing.name}</h2>
				  		</div>
					</div>
				  </div>
				</div>
		    </div>
			)
    return (
	    	<section id="reviews" className="pb-5 pt-5">
	    		<div id="carouselControls" data-interval="3000" className="carousel slide" data-ride="carousel">
	    		<div class="container text-center">
				<h1 className="text-center m-5">ОТЗЫВЫ</h1>
					
					  <div className="carousel-inner text-left">
					    	{reviews}
					  </div>
					  <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					
				<button className="btn btn-info p-3">ОСТАВИТЬ ОТЗЫВ</button>
				</div>
				</div>
	    	</section>
    );
}

export default Reviews;
