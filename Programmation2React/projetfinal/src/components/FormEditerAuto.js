import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {API} from "../constantes";
import {toast} from "react-toastify"

function FormEditerAuto(props){
  const [donneesRecues , setDonneesRecues] = useState({marque:'',image:'',kilometrage:'', annee:'', prix:''});
  const [autoID , setAutoID] = useState(props.location.search.substring(4,props.location.search.length));
  const [image , setImage] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getAutoInfos();
  },[]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async function getAutoInfos() {
    try {
      
      const response = await fetch(API + autoID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editerAuto(marque,image,kilometrage, annee, prix) { 
    try{ 
      const response = await fetch(API + autoID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
            marque: marque,
            image: image,
            kilometrage: kilometrage,
            annee:annee,
            prix:prix,
        }) 
      }); 
      if(response.ok){ 
        props.history.push("/");
        toast.success("Modification de l'auto" + marque);

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function supprimerAuto() { 
    try{ 
    const response = await fetch(API + autoID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      //const jsonResponse = await response.json(); 
      props.history.push("/");
      toast.error("Supression de l'auto ");

      return response; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}

  function handleEdit(event){
    event.preventDefault();
    
    const marque = document.getElementById('marque').value;
    const image = document.getElementById('image').value;
    const kilometrage = document.getElementById('kilometrage').value;
    const annee = document.getElementById('annee').value;
    const prix = document.getElementById('prix').value;
   
    editerAuto(marque,image,kilometrage,annee,prix);

  }

  function handleImage(event){
    const image = document.getElementById('image').value;
    setImage(image);
  }
    return (
      <>
       <Form>
       <Form.Group controlId="marque">
            <Form.Label>Marque</Form.Label>
            <Form.Control type="text" placeholder="Marque" defaultValue={donneesRecues.marque}/>
     </Form.Group>
     <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="image"  onBlur={handleImage} defaultValue={donneesRecues.image}/>
     </Form.Group>
     {image !== "" && <Image src={image} rounded width="125"/>}
     <Form.Group controlId="kilometrage" >
            <Form.Label>kilometrage</Form.Label>
            <Form.Control type="text" placeholder="Kilometrage" defaultValue={donneesRecues.kilometrage}/>
     </Form.Group>
     <Form.Group controlId="annee">
            <Form.Label>annee</Form.Label>
            <Form.Control type="text" placeholder="Annee" defaultValue={donneesRecues.annee}/>
     </Form.Group>
     <Form.Group controlId="prix">
            <Form.Label>Prix</Form.Label>
            <Form.Control type="text" placeholder="Prix" defaultValue={donneesRecues.prix} />
     </Form.Group>

        <Button variant="primary" type="submit" onClick={handleEdit}>
            Soumettre
        </Button>
        </Form>
        <p className="btn btn-danger mt-5" onClick={supprimerAuto}>Supprimer auto</p>
      </>
    );
  }

  export default FormEditerAuto;