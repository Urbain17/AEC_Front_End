import React from "react";
import Col from "react-bootstrap/Col";
import showImage from "../../img/lesinvincibles.jpg";

let image = {
    scr: showImage,
    alt: "Les invincibles",
    title: "Les invincibles",
};



export class TvShow extends React.Component{
    render(){
        console.log(this.props.nom);
        return(
            <Col xs lg="2">
                <img
                scr={image.scr}
                alt={image.alt}
                title={image.title}
                className="img-fluid"
                />
            </Col>
        );
    }
}
