import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg} from 'reactstrap';
import fetchJsonp from 'fetch-jsonp';

class ArtPage extends Component{
 	 constructor (props) {
    super(props)
    this.state = {
      bigPicture: false,
      pictures: [],
      selectedIndex: 0
    }
      this._TogglePrev = this._TogglePrev.bind(this);
      this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount () {
    fetchJsonp('https://api.vk.com/method/photos.get?owner_id=-117179920&album_id=246570102&access_token=0989ad1e0989ad1e0989ad1ead09ec15a7009890989ad1e52f0d8c1830196143cdb8f23&v=5.52')
      .then(function(response) {
        return response.json()
      })
      .then(json => {
            this.setState({pictures: json.response.items.reverse()});
          })
  }

  _ToggleNext() {
      if(this.state.selectedIndex == this.state.pictures.length - 1)
        return;

      this.setState(prevState => ({
          selectedIndex: prevState.selectedIndex + 1
      }))
  }

  _TogglePrev() {
      if(this.state.selectedIndex == 0)
       return;

      this.setState(prevState => ({
          selectedIndex: prevState.selectedIndex - 1
      }))
  }

  render () {
    return (
      <div id="artpage" style={{minHeight:"100vh"}}>
       {this.state.bigPicture ? 
        <div className="blackBG">
          <div className="row align-items-center text-center text-white" style={{height: "100%"}}>

            <div className="col-4 d-flex align-items-center justify-content-center" style={{height: "100%", cursor: "pointer"}}  onClick={this._TogglePrev}>
               <button className="fas fa-chevron-left fa-3x bg-transparent text-center text-white border-0 p-0"></button>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center" style={{height: "100%", cursor: "pointer"}}>            
                  <div className="row">
                    <div className="col-10" onClick={this._ToggleNext}>
                      <img src={this.state.pictures[this.state.selectedIndex].photo_604} className="img-fluid"/>
                      <p className=" mt-2">{this.state.pictures[this.state.selectedIndex].text}</p>
                    </div>
                    <div className="col-2">
                      <button onClick={()=>{this.setState({bigPicture: false})}} className="fas fa-times-circle fa-3x text-center text-white bg-transparent border-0 p-0"></button>
                    </div>
                  </div>
            </div> 
            <div className="col-4 d-flex align-items-center justify-content-center" style={{height: "100%", cursor: "pointer"}} onClick={this._ToggleNext}>
              <button className="fas fa-chevron-right fa-3x text-center text-white bg-transparent border-0 p-0"></button> 
            </div>
          </div>
        </div>
        : false}

        <h1 className="text-center pt-5 mb-5">АРТ</h1>
        <div className="container">
          <div className="row">
            {this.state.pictures.map((img, index) => 
              <div className="col-3 mb-4" key={img.id}>
                <Card style = {{height : "250px"}}>
                  <button onClick={()=>{
                  this.setState({ bigPicture: true, selectedIndex: index })}} className="text-center border-0" title={img.text}  style={{ height:"100%", backgroundPosition: "top", backgroundImage: `url(${img.photo_604})` }}></button>
                </Card>           
              </div>
              )}
          </div>
           
        </div>
      </div>
    )
    }
  }

export default ArtPage;
