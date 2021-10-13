import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators";
import { people } from "../people";

@customElement("people-app")
class PeopleAppElement extends LitElement {
  people = people;

  onMakeFavourite(event) {
    console.log("make favourite", event.detail);
  }

  render() {
    return html`
      <h3>List of people</h3>
      <body><name-app></name-app></body>
      
      ${this.people.map(
        (person) => html` <person-card .person=${person}></person-card> `
      )}
    
    `;
  }
}
