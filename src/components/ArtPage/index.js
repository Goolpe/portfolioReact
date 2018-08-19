import React, { Component } from 'react';

class ArtPage extends Component{
 	 constructor(props){
    super(props);
    this.state = {
    	}
	}
  	componentDidMount() {
    	window.scrollTo(0,0);

      fetch("https://api.vk.com/method/photos.get?owner_id=-117179920&album_id=246570102&offset=100&count=24&v=5.80&access_token=51662add51662add51662add4351039de55516651662add0a1f2f6c7285521b5efb35e4")
       .then( (response) => {
          console.log("success")   
       })
       .then( (json) => {
          console.log("error")
       })
	}
	
render(){
    return (
    	<section id="library" className="bg-dark">
      <div className="container text-center text-white" style={{height: "100vh"}}>
        <h1 className="pt-5">АРТ</h1>
      </div>
      </section>
    );
	}
}

export default ArtPage;
