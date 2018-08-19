import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;


class LibraryPage extends Component{
  constructor (props) {
    super(props)
    this.state = {
      picture: ''
    }
  }
  componentDidMount() {
    window.scrollTo(0,0);

    var dbx = new Dropbox({ accessToken: 'XQg_J3kqqMAAAAAAAAAAkacBNbvwpY3vIZGVDKxMgKhQtOwd26Z91SGzX9Oj_2XZ', fetch: fetch });
    dbx.filesListFolder({path: ''})
     .then(res => {
        const imgItems = res.entries.map((img, index) => 
        <div className="col-4 mb-5" key={img.id}>
          <Link to={`/book${img.path_lower}`} className="text-white">
            <div className="wrapper"  style={ { backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_640.jpg"})` }}>
              <div className="card d-flex align-items-center justify-content-center rounded-0" >
                <h1 className="text-center pl-3 pr-3">{img.name.toUpperCase()}</h1>
              </div>
            </div>
          </Link>
         </div>
          )
        this.setState({picture: imgItems});
      })
    }

  render(){	
    return (
    	<section id="library" className='mt-5 mb-5' style={{minHeight:"100vh"}}>
        <h1 className="text-center mb-5">БИБЛИОТЕКА</h1>
        <div className="container">
          <div className="row">
            {this.state.picture}
          </div>
        </div>
       </section>
           )
  }
}

export default LibraryPage;




