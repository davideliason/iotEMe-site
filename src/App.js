import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import PubNubReact from 'pubnub-react';
import Message from './Message.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastGPSLatitudeAdded: "",
      lastGPSLongitudeAdded: ""
    }

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
            channels: ['locationChannel'],
            withPresence: true
        });

        this.pubnub.getStatus((status) => {
          console.log(status);
        });
      }

      componentDidMount(){
        this.props.getGPSDataFromFirebase();
        this.props.addGPSDataToFirebase("3","4");
        this.setState({
          firebaseGps : this.props.gps
        })
      }

     componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['locationChannel']
        });
    }

      publishLocationToChannel(){
         this.pubnub.publish({
                message: Math.floor((Math.random() * 10) + 1) ,
                channel: 'locationChannel'
            });
    }

  render() {
    const location = this.props.location; 
    const {gps} = this.props.gps;

    return (
      <div>
        <div className="jumbotron">
          <h3 className="display-4"> IoT Empowering Me</h3>
          <p className="lead"> Personal safety in chaotic times and places</p>
        </div>
        <Grid>
          <Row>
              <Col xs={6} md={4}> <Button bsStyle="success" onClick={this.publishLocationToChannel} >new gps</Button>
              </Col>
              <Col xs={6} md={4}> <button onClick={() => this.props.addGPSDataToFirebase("one","two")}>new gps</button>
              </Col>
          </Row>
          <Row>
              <Col xs={6} md={4}> 
              </Col>
               <Col xs={6}>
               {gps && gps.length > 0 ? (
              <ul>
                {gps.map((gps, index) => {
                  return (
                    <li key={index} >
                      Latitude: {gps.latitude} - Longitude: {gps.longitude}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
