import React from 'react';
import {Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Auto extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Col lg='4' className='mt-4'>
        <Card>
        <Card.Img variant="top" src={this.props.image} style={{width:"100%", height:250}} />
        <Card.Body>
          <Card.Title>
          <Link
              to={
                'TypeVoiture/' +
                this.props.marque +
                '?id=' +
                this.props.idVoiture
              
            }

            >
             {this.props.marque} 
              </Link>
          </Card.Title>

          <Card.Text>
            <div>kilometrage: {this.props.kilometrage}</div>
            <div>année: {this.props.annee}</div>
            <div>prix: {this.props.prix}</div>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
            </>)
    }
}
