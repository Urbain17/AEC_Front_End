import React from "react";
import { Link } from "react-router-dom";

export class BoutonAjouterAuto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <> 
        <Link to="/ajouterAuto" className="btn btn-primary mt-5">
          Ajouter une auto
        </Link>
      </>
    );
  }
}