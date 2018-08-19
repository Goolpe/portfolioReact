import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;


class BookPage extends Component{
  constructor (props) {
    super(props)
    this.state = {
      picture: ''
    }
  }
  componentDidMount() {
    window.scrollTo(0,0);

    var dbx = new Dropbox({ accessToken: 'XQg_J3kqqMAAAAAAAAAAkacBNbvwpY3vIZGVDKxMgKhQtOwd26Z91SGzX9Oj_2XZ', fetch: fetch });
    dbx.filesListFolder({path: `/${this.props.match.params.id}` })
      .then(res => {
        const imgItems = res.entries.map((img, index, match) => 
        <div className="col-4 mb-5 text-center" key={img.id}>     
          <Link to={`/book${img.name}`}>
             { img.name.substr(-3) === 'pdf' ? <i className="fas fa-file-pdf fa-5x text-info"></i> : <i className="fas fa-folder fa-5x text-info"></i>}
             <p className="text-dark">{img.name}</p>
            </Link>  
         </div>
          )
        this.setState({picture: imgItems});
      })
    }

  render(){	
    return (
    	<section id="library" className='mt-5 mb-5' style={{minHeight:"100vh"}}>
      <div className="container">
      <Link to="/library" className="text-dark"><i className="text-dark fas fa-angle-left "></i>НАЗАД</Link>
        <h1 className="text-center mb-5">БИБЛИОТЕКА</h1>
        
          <div className="row">
            {this.state.picture}
          </div>
        </div>
       </section>
           )
  }
}

export default BookPage;



