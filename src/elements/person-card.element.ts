import { LitElement, html, css } from "lit";
import { customElement, query, property } from "lit/decorators";

import { IPerson, people } from "../people";

@customElement("person-card")
class PersonCardElement extends LitElement {
  
  
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
  person!: IPerson;

  render() {
    return html`<ul><li >Name:${this.person.name}</li>
      <li >Email:  ${this.person.email}</li>
      <li >Title: ${this.person.title}</li>
      <li >Color: ${this.person.color}</li>
      <li >Age: ${this.person.age}</li>
      </ul>
  
  
    `;
    
  }
}
