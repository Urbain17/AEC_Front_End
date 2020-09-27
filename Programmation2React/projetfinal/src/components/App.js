import React from "react";
import {Auto} from './Auto';
import {Container, Row} from 'react-bootstrap';
import {AjouterAuto} from './AjouterAuto';
import { FormAjouterAuto } from "./FormAjouterAuto";
import AfficherAuto from './AfficherAuto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Menu} from './Menu';
import { ToastContainer } from "react-toastify";
import FormEditerAuto from './FormEditerAuto';
import 'react-toastify/dist/ReactToastify.css';
import {PageNotFound} from './PageNotFound';
import BoutonInstallPWA from "./BoutonInstallPWA";

function App() {
    return ( <div> 
        <Container> 
    
        <Router>
        <ToastContainer autoClose={3000} hideProgressBar />
            <Menu/>
            <BoutonInstallPWA/>
      <Switch>
        <Route path="/" exact component={AfficherAuto} />
        <Route path="/ajouter" component={FormAjouterAuto} />
        <Route path="/TypeVoiture/:marque" component={FormEditerAuto} />
        <Route component={PageNotFound} />
      </Switch>
      </Router>
    
         
           
         
        </Container>
        </div>);
    }

    export default App;