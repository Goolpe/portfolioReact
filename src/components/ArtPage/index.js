import React, { Component } from 'react';

class ArtPage extends Component{
 	 constructor(props){
    super(props);
    this.state = {
    	pictures: []
    	}
	}
  	componentDidMount() {
    	window.scrollTo(0,0);
    	fetch('https://api.vk.com/method/photos.get?owner_id=-37276776&album_id=154823866&offset=100&count=24&v=5.80&access_token=51662add51662add51662add4351039de55516651662add0a1f2f6c7285521b5efb35e4')
		.then(res => res.json())
		.then(data => {
			let pictures = data.items.map((pic) => {
				return(
					<div key= {pic.items}>
						<img src={pic.sizes.url} />
					</div>
				)
			})
			this.setState({pictures: pictures});
			console.log("state", this.state.pictures);
		})
	}
	
render(){
    return (
    	<section id="library" className="bg-dark">
      <div className="container text-center text-white" style={{height: "100vh"}}>
        <h1 className="pt-5">АРТ</h1>
        {this.state.pictures}
      </div>
      </section>
    );
	}
}

export default ArtPage;
