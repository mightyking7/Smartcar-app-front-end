import React, { Component } from 'react';
import GoogleApiComponent from 'google-maps-react'
import Map from 'Map.js'


const __GAPI_KEY__ = 'AIzaSyAblVcIeN2fyCK95R8Etxj1P8Kfm4bHWKU'

/**
 * Container responsible for loading the Google map api
 *
 * @author Isaac Buitrago
 */
export class Container extends Component
{
    render()
    {
        const style = {

            height: '100vh',
            width : '100vw'
        }

        return(
            <div style={style}>
                <Map google={this.props.google} />
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: __GAPI_KEY__
})(Container)
