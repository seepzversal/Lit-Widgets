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
      <h3>Use of card</h3>
      <hr />
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
