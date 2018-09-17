import React, {Component} from 'react';

class error404Page extends Component{
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){	
    return (
    	<section id="error404" className="text-center" style={{backgroundColor: "#313438",height:"100vh"}}>
        <img src="404.svg" style={{height:"100%"}} alt="404 error" />
      </section>
    )
  }
}

export default error404Page;
