import React, { Component } from 'react';

class Schedule extends Component {
	constructor(props){
		super(props);
		this.state={
			now: ((new Date(2018, 7, 21, 19) - new Date())/1000)
		}
		this.date = this.date.bind(this);
	}
	  componentDidMount() {
	    this.timerID = setInterval(
	      () => this.tick(),
	      1000
	    );
	  }

	  componentWillUnmount() {
	    clearInterval(this.timerID);
	  }

	  tick() {
	    this.setState({
	      now: ((new Date(2018, 7, 21, 19) - new Date())/1000)
	    });
	  }

	date(){
		var newDay = Math.ceil(this.state.now/3600/24);
		var newDayHours = Math.ceil(this.state.now/3600%24);
		var newDayMinutes = Math.ceil(this.state.now/60%60);
		var newDaySeconds =  Math.ceil(this.state.now%60);
		return (newDay  + " дней " + newDayHours  + ":" + newDayMinutes + ":" + newDaySeconds);	
	}
  render() {
    return (
    	<div>
	    	<section id="schedule">
		    	<div className="container pt-5 pb-5  text-center">
					<h1 className="text-white m-5">РАСПИСАНИЕ СТРИМОВ</h1>
					<img src="shedule.jpg" className="img-fluid mb-5" alt="" />
			    	<div id="nextGame" className=" text-center text-white">
			    		<h1>ДО СЛЕДУЮЩЕЙ ИГРЫ ОСТАЛОСЬ:</h1><br /> 
			    		<h2  className="display-4">{this.date()}</h2>
			    		<br />
						<div>
							<a href=""><i className="fab fa-youtube text-danger fa-2x mr-4"> YOUTUBE</i></a>
							
							<a className="btn btn-outline-secondary mr-4 p-3">ПОДПИСАТЬСЯ НА ОБНОВЛЕНИЯ</a>
							<a href=""><i className="fab fa-twitch text-info fa-2x"> TWITCH</i></a>
						</div>
			   		</div>
		   		</div>
		    </section>
		    
	    </div>
    );
  }
}

export default Schedule;
