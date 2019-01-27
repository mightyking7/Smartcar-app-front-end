import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const API_KEY = "AIzaSyAblVcIeN2fyCK95R8Etxj1P8Kfm4bHWKU";

class App extends Component
{
  render()
  {
      return (
        <div className="App">
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
      </div>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(App);
