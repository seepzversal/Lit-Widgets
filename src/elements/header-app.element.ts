import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators";


@customElement("header-app")
class HeaderElement extends LitElement {
  render() {
    return html`
      <h2>This is the header</h2>

      
    `;
  }
}
