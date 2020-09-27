import React, { useState, useEffect } from 'react';
import { Form, Row } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import {API} from "../constantes";
import { Auto } from "./Auto";
import { Slider } from './Slider';


function AfficherAuto() {
    const [donneesRecues, setDonneesRecues] = useState([]);
  
    //Ajout de la gestion des erreurs
    useEffect(() => {
      getAutos();
    }, [donneesRecues.join(",")]); //Si on enlève le second paramètre, on obtient une boucle infinie.
  
    async function getAutos() {
      try {
        const response = await fetch(API);
        const reponseDeApi = await response.json();
        setDonneesRecues(reponseDeApi);
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <>
      <Slider></Slider>
        <h1>Affichage de la liste de toutes les autos</h1>
        <Row>
        {donneesRecues.map((key, i) => (
          <Auto idVoiture={key._id} marque={key.marque} key={key.marque + key._id} image={key.image} prix={key.prix } kilometrage={key.kilometrage} annee={key.annee}></Auto>
        ))}
        </Row>
      </>
    );
  }
  
  export default AfficherAuto;
  