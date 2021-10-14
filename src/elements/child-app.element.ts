import { LitElement, html } from "lit-element";
import { customElement,property } from "lit/decorators";


@customElement("child-app")
class ChildElement extends LitElement {
  @property({type: Number})
  count = 0;
  render() {
    return html`
      <h2>This is the child component</h2>
      
      <h2> ${this.count}</h2>
     `;
  }
  
 

}
