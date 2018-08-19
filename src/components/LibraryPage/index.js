import React, {Component} from 'react';
import { Card, CardImg} from 'reactstrap';
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
      console.log(res)
        const imgItems = res.entries.map((img) => 
        <div className="col-3 mb-4" key={img.id}>
          <a href=""></a>
           <Card style = {{height : "300px"}}>
            <CardImg top height="100%" src={img.photo_604} title={img.text} alt={img.text} />
          </Card>           
          </div>
          )
        this.setState({picture: imgItems});
      })
    }

  render(){	
    return (
    	<section id="library" className='mt-5 mb-5'>
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
{/*      <div className="container text-center text-white" style={{height: "100vh"}}>
        <h1 className="pt-5">БИБЛИОТЕКА</h1>
          <iframe title="lib" src="https://drive.google.com/embeddedfolderview?id=1GuOYFvCyuJeZnYu7KweeKsE71hcFNjpB#grid" style={{color:"white"}} width="100%" height="100%" frameBorder="0"></iframe>
      </div>*/}




