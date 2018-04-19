import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
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
