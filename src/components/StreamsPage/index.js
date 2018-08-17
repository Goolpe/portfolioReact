import React from 'react';
import {
  Link
} from 'react-router-dom';
import Schedule from '../HomePage/schedule';
import Channels from './Channels';

function StreamsPage(props){
	  return (
	  	<div>
		  	<Channels />
	    	<Schedule />
    	</div>
	  );
	}

export default StreamsPage;

