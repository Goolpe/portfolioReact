import React, {Component} from 'react';

class LibraryPage extends Component{
 
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){	
    return (
    	<section id="library" className="bg-dark">
      <div className="container text-center text-white" style={{height: "100vh"}}>
        <h1 className="pt-5">БИБЛИОТЕКА</h1>
          <iframe title="lib" src="https://drive.google.com/embeddedfolderview?id=1GuOYFvCyuJeZnYu7KweeKsE71hcFNjpB#grid" style={{color:"white"}} width="100%" height="100%" frameBorder="0"></iframe>
      </div>
      </section>
    );
}
}

export default LibraryPage;

