import React from "react";
import Row from "react-bootstrap/Row";


let nomCategorie = "Suspense";

export class Categorie extends React.Component {
    render(){
        return(
            <>
                <Row>
                    <h1>{nomCategorie}</h1>
                </Row>
                <Row>
                  <TvShow/> 
                  <TvShow/> 
                  <TvShow/> 
                  <TvShow/> 
                  <TvShow/> 
                  <TvShow/> 
                </Row>
            </>
        );
    }
}