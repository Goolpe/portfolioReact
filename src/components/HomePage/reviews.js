import React, {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const items = [
  {
		id:0,
		src: "https://pp.userapi.com/c846522/v846522612/2cc8f/wtsXKLm54uA.jpg",
		altText: "1",
		text: "ВОСХИТИТЕЛЬНО, ДРУГ!",
		name: "Джонни Депп"
	},
	{
		id:1,
		src: "https://pp.userapi.com/c841234/v841234068/248de/-NbfkIst47I.jpg",
		altText: "2",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo, perspiciatis voluptas magnam reiciendis necessitatibus facere neque quo ab reprehenderit fugiat adipisci aspernatur libero quos excepturi, cum veniam aut ipsum.",
		name: "Сергей Брин"
	},
	{
		id:2,
		src: "https://pp.userapi.com/c844321/v844321415/d617/VvyY4yxfLQc.jpg",
		altText: "3",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis quod illum quas vel optio molestiae magnam! Dolorum labore iste, laboriosam debitis doloremque eveniet similique deleniti qui. Eos sint, illo.",
		name: "Человек Паук"
	},
	{
		id:3,
		src: "https://pp.userapi.com/c845421/v845421486/b4c46/KW2bbOiQsWY.jpg",
		altText: "4",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ea ipsa sed consectetur nihil, esse ex blanditiis reprehenderit! Repellendus officia, aliquid reiciendis modi architecto quaerat quisquam accusamus! Corporis, delectus sunt.",
		name: "Джон Уик"
	}
]

class Reviews extends Component {
  constructor(props){
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  componentDidMount() {
    window.scrollTo(0,0);
    this.setState({ activeIndex: 0 });
  }
  
  render(){
    const { activeIndex } = this.state;

    const slides = items.map((item) => 
        <CarouselItem

          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="row">
        		<div className="col-4"> <img src={item.src} className="img-fluid" alt={item.altText} /></div>
        		<div className="col">
              <div className="d-flex align-items-start flex-column bd-highlight" style={{height:"100%"}}>
                <div className="bd-highlight mb-auto">{item.text} <br /></div>
                <div className="bd-highlight"><h2>{item.name}</h2></div>
              </div></div>
            </div>
        </CarouselItem>
      );
    return (
    	<div id="reviews">
    		<h1 className="text-center m-5">ОТЗЫВЫ</h1>
        <div className="container">
          
	    	<Carousel
	        activeIndex={activeIndex}
	        next={this.next}
	        previous={this.previous}
	        interval="2000"
	      >
		        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
		        {slides}
		        <CarouselControl direction="prev" onClickHandler={this.previous} />
		        <CarouselControl direction="next" onClickHandler={this.next} />
	      	</Carousel>

          </div>
	     </div>
    );
}
}
export default Reviews;
