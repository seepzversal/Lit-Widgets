import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators";
import { card } from "../card";
import {repeat} from 'lit/directives/repeat.js';

@customElement("card-app")
class CardAppElement extends LitElement {
card = card;

  onMakeFavourite(event) {
    console.log("make favourite", event.detail);
  }

  //render() {
    //return html`
      //<h3>Use of card</h3>
      //<hr />
      //<body><name-card></name-card></body>
      
      //${this.card.map(
        //(person) => html` <name-card .person=${person}></name-card> `
      //)}
    
    //`;
  //}


  //used repeat instead of map
  
  render(){
      return html `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      </link>
      
      <h3>Use of Bootstrap cards</h3>
      <hr/>
      <ul>
      ${repeat(this.card, (person) => 
        html `
        <li>
        <name-card .person=${person}></name-card>
        </li>
        `
        )}
      </ul>
      `;
  }
}
