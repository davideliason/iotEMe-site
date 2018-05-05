import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import PubNubReact from 'pubnub-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // state values to be pushed as object to firebase db
      lastGPSLatitudeAdded: "",
      lastGPSLongitudeAdded: "",
      lastGPSDataStringFromPubNub: ""
    }

    this.handleOnChangeLatitude = this.handleOnChangeLatitude.bind(this);
    this.handleOnChangeLongitude = this.handleOnChangeLongitude.bind(this);

    this.handleAddGPSDataToFirebase = this.props.addGPSDataToFirebase.bind(this);
    // this.handleChangeStateLocation = this.props.changeStateLocation.bind(this);

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

        this.pubnub.getMessage('locationChannel', (msg) => {
          console.log(msg);
        });

         this.pubnub.getStatus((status) => {
          this.pubnub.publish( {
            message : "hello world from react",
            channel : 'locationChannel'
          });
        });
      }

  componentDidMount(){
        this.props.getGPSDataFromFirebase();
        this.props.changeStateLocation("testgeostring");
        this.props.changeStateLocation(this.state.lastGPSLatitudeAdded);

        this.pubnub.publish({
                message: Math.floor((Math.random() * 10) + 1) ,
                channel: 'locationChannel'
            });
        // this.setState({
        //   firebaseGps : this.props.gps
        // })
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

  handleOnChangeLatitude = (e) => {
      this.setState({
        lastGPSLatitudeAdded: e.target.value
    });
  }

   handleOnChangeLongitude = (e) => {
      this.setState({
        lastGPSLongitudeAdded: e.target.value
    });
  }

  // handleSubmit(event){
  //   console.log("new location added");
  //   event.preventDefault();
  //   this.handleAddGPSDataToFirebase({this.state.lastGPSLatitudeAdded,this.state.lastGPSLongitudeAdded)};
  // }

  render() {
    // const location = this.props.location; 

    const {gps} = this.props.gps;
    const messages = this.pubnub.getMessage('locationChannel');

    return (
      <div>
        <div>
        </div>
        <div className="jumbotron">
          <h3 className="display-4"> IoT Empowering Me</h3>
          <p className="lead"> Personal safety in chaotic times and places</p>
        </div>
        <Grid>
          <Row>
              <Col xs={6} md={4}> 
                  <ul>
                    {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                </ul>
              </Col>
          </Row>
          <Row>
              <Col xs={6} md={4}>
                <form onSubmit={() => {this.handleAddGPSDataToFirebase(this.state.lastGPSLatitudeAdded, this.state.lastGPSLongitudeAdded)}}>
                 <input
                  type="text"
                  placeholder = "latitude"
                  value={this.state.lastGPSLatitudeAdded}
                  onChange={this.handleOnChangeLatitude}
                 />
                  <input
                  type="text"
                  placeholder = "longitude"
                  value={this.state.lastGPSLongitudeAdded}
                  onChange={this.handleOnChangeLongitude}
                 />
                 <Button className="btn btn-primary" type="submit" value="submit">Submit</Button>
                </form>
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
