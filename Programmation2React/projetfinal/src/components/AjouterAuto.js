import React from "react";
import {Form} from 'react-bootstrap';

export class AjouterAuto extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <Form>
    <Form.Group controlId="marque">
    <Form.Label>Marque</Form.Label>
    <Form.Control type="text" placeholder="Marque" />
     </Form.Group>
     <Form.Group controlId="kilometrage">
    <Form.Label>kilometrage</Form.Label>
    <Form.Control type="text" placeholder="Kilometrage" />
     </Form.Group>
     <Form.Group controlId="annee">
    <Form.Label>annee</Form.Label>
    <Form.Control type="text" placeholder="Annee" />
     </Form.Group>
     <Form.Group controlId="prix">
    <Form.Label>Prix</Form.Label>
    <Form.Control type="text" placeholder="Prix" />
     </Form.Group>
    </Form>
    <p className='btn btn-primary'>Ajouter une auto</p>
            </>
        
        )
    }

    
}