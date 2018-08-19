import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg} from 'reactstrap';

class ArtPage extends Component{
 	 constructor (props) {
    super(props)
    this.state = {
      picture: ''
    }
  }
  componentDidMount () {
    axios.get("https://api.vk.com/method/photos.get?owner_id=-117179920&album_id=246570102&access_token=0989ad1e0989ad1e0989ad1ead09ec15a7009890989ad1e52f0d8c1830196143cdb8f23&v=5.52",{
      method: 'GET',
      dataType: 'JSONP'
    })
    .then(res => {
        
        const imgItems = res.data.response.items.map((img) => 
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
  render () {
    return (
      <div id="artpage" className='mt-5 mb-5'>
        <h1 className="text-center mb-5">АРТ</h1>
        <div className="container">
          <div className="row">
            {this.state.picture}
          </div>
        </div>
      </div>
    )
    }
  }

export default ArtPage;
