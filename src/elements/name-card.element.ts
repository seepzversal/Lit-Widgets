import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators";

import { ICard, card } from "../card";

@customElement("name-card")
class NameCardElement extends LitElement {
  
  
  static styles = [
    css`
      :host {
        display: block;
        clear: both;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
      #img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        background-size: cover;
        background-image: var(--image-url);
        background-color: var(--color, #ccc);
        float: left;
        overflow: hidden;
      }
    `,
  ];

  @property()
  person!: ICard;

 //used bootstrap cards
  render() {
    return html `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${this.person.name}</h2>
            <h5 class="card-subtitle ">${this.person.email}</h5>
            <p class="card-text">A brief introduction about myself.</p>
            <a href="#" class="card-link">Personal Info</a>
            <a href="#" class="card-link">Resume</a>
        </div>
    </div>
      `;

      
    //return html`<ul><li >Name:${this.person.name}</li>
    //  <li >Email:  ${this.person.email}</li>
      
    //</ul>
  
  
    
    
  }
}
