import React from 'react';
import './App.css';
 


export class Paroles extends React.Component  {

    render() { 
        return ( 
            this.props.paroles
         );
    }
}

Paroles.defaultProps = { paroles: 'Les paroles ne sont pas disponibles. Merci de votre compréhension!'};  