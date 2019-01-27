import React, { Component } from 'react';

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
