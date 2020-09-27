import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Zoom, Fade, Roll} from 'react-reveal';

export class Slider extends React.Component {
    
    render(){
        return(
            <>

            <Roll left>
                <Jumbotron>
                    <h1>Bienvenue sur le site de vente des autos</h1>
                </Jumbotron>
            </Roll>

            </>
        )
    }
    
}

