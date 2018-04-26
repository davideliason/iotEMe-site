import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import PubNubReact from 'pubnub-react';
import Message from './Message.js';

class App extends Component {
  constructor(props){
    super(props);

        this.state = {
            messages : "",
            locations: "",
            gps: []
        };

        this.publishMessageToChannel = this.publishMessageToChannel.bind(this);
        this.publishLocationToChannel = this.publishLocationToChannel.bind(this);

        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-c377ebaa-f828-40f5-8b64-9fef4ff4aeaa',
            subscribeKey: 'sub-c-8b9161d0-391a-11e8-9da7-9e748936d455'
        });

        this.pubnub.init(this);
  }

  componentWillMount() {
        this.pubnub.getStatus();

        this.pubnub.subscribe({
            channels: ['messagesChannel','locationsChannel'],
            withPresence: true
        });

        this.pubnub.getMessage('messagesChannel', (msg) => {
            this.setState({ messages: msg.message});
        });

        this.pubnub.getMessage('locationsChannel', (msg) => {
            this.setState({ locations: msg.message});
        });

        this.pubnub.getStatus((status) => {
          console.log(status);
        });
      }


     componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['messagesChannel','locationsChannel']
        });
    }

      publishMessageToChannel(){
         this.pubnub.publish({
                message: "new number: " + Math.floor((Math.random() * 10) + 1) ,
                channel: 'messagesChannel'
            });
    }

      publishLocationToChannel(){
         this.pubnub.publish({
                message: Math.floor((Math.random() * 10) + 1) ,
                channel: 'locationsChannel'
            });
    }

  render() {
    const {messages}  = this.props.messages;
    const locations = this.props.locations; 
    const {gps} = this.props.gps;

    // const status = this.pubnub.getStatus();

    return (
      <div>
       {messages}
        <div className="jumbotron">
          <h3 className="display-4"> IoT Empowering Me</h3>
          <p className="lead"> Personal safety in chaotic times and places</p>
        </div>
        <Grid>
          <Row>
              <Col xs={6} md={4}> <Button bsStyle="primary" onClick={this.publishMessageToChannel}>new msg</Button>  
              </Col>
              <Col xs={6} md={4}> <Button bsStyle="success" onClick={this.publishLocationToChannel} >new gps</Button>
              </Col>
          </Row>
          <Row>
              <Col xs={6} md={4}>
                  <Message msg={messages} />
              </Col>
              <Col xs={6} md={4}>  {locations}
              </Col>
          </Row>
         
        </Grid>
      </div>
    );
  }
}

export default App;
