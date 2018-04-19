import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import PubNubReact from 'pubnub-react';


class App extends Component {
  constructor(props){
    super(props);

        this.state = {
            messages : "",
            gpsLocation: ""
        };

        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-c377ebaa-f828-40f5-8b64-9fef4ff4aeaa',
            subscribeKey: 'sub-c-8b9161d0-391a-11e8-9da7-9e748936d455'
        });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
              <Col xs={6} md={4}> <Button bsStyle="primary" >new msg</Button>  
              </Col>
              <Col xs={6} md={4}> <Button bsStyle="success" >new gps</Button>
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
