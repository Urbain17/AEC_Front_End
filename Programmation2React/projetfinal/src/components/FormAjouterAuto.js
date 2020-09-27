import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import {toast} from "react-toastify";
import {API} from "../constantes";

export class FormAjouterAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: ""};

    this.handleAjouter = this.handleAjouter.bind(this);
    this.ajouterAuto =this.ajouterAuto.bind(this);
   this.handleImage = this.handleImage.bind(this);
  }

  async ajouterAuto(marque,image,kilometrage, annee, prix) { 
    try{ 
        console.log(marque,image,kilometrage,annee,prix);
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body : JSON.stringify({
          marque: marque,
          image: image,
          kilometrage: kilometrage,
          annee:annee,
          prix:prix,
          
        }) 
      
      }); 
     
      if(response.ok){  
        
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Ajout auto " + marque);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
} 
 
  handleAjouter(event){
    event.preventDefault();
    
    const marque = document.getElementById('marque').value;
    const image = document.getElementById('image').value;
    const kilometrage = document.getElementById('kilometrage').value;
    const annee = document.getElementById('annee').value;
    const prix = document.getElementById('prix').value;
   
    this.ajouterAuto(marque,image,kilometrage,annee,prix);
  }

   handleImage(event){
  const image = document.getElementById('image').value;
   this.setState( {image : image});
  }


  render() {
    return (
      <>
        <Form>
          
          <Form.Group controlId="marque">
            <Form.Label>Marque</Form.Label>
            <Form.Control type="text" placeholder="Marque" />
     </Form.Group>
     <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="image"  onBlur={this.handleImage} />
     </Form.Group>
     {this.state.image !== "" && <Image src={this.state.image} rounded width="125"/>}
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

        <Button variant="primary" type="submit" onClick={this.handleAjouter}>
            Soumettre
        </Button>
        </Form>
      </>
    );
  }
}