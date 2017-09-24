import React, { Component } from 'react';
import circleHoney from '../images/circle_honey.png';

class Contact extends Component {
  render(){
    return (
      <div className="row text-center">
        <img width="200" src={circleHoney} />
        <h1>OPHELIE ORTAL</h1>
        <hr></hr>

        <p>
          Diplomée d’une Licence Design global de l’Université Bordeaux Montaigne, je suis passionnée par l’illustration et le graphisme.
        </p>
        <p>
          Cette passion n’a jamais cessé de me suivre au quotidien,
          et aujourd’hui je réalise mon rêve d’en faire mon métier.
        </p>
        <p>
          Aujourd'hui sur Toulouse, j’illustre des affiches d’évènements en tout genres,
          flyers et toute sorte de communication visuelle illustrée.</p>
        <p>
          Mon style floral et coloré saura mettre en valeur vos photographies, votre produit, votre marque,
          accompagner un projet éditorial ou agayer vos cartes de visite !
        </p>
        <hr></hr>

        <p>
          <b>N'hésitez pas à me contacter par mail :</b>
        </p>
        <p>
          ophelie.ortal@gmail.com
        </p>
        <p>
          Ou à bientôt sur les réseaux sociaux !
        </p>
      </div>
    );
  }
}

export default Contact;
