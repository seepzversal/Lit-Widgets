import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators";


@customElement("footer-app")
class FooterElement extends LitElement {
  render() {
    return html`
      <h2>This is the footer</h2>

    `;
  }
}
