import React, { Component } from 'react';
import './Message.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';

class Message extends Component {

	render(){
		return (
				<div>
					<p>{this.props.msg}</p>
				</div>
			);
	}
}

export default Message