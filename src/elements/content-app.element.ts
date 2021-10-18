import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators";


@customElement("content-app")
class ContentElement extends LitElement {
   render() {
    return html`
    <h2>This is the main content</h2>
    <hr/>
    <body><people-app></people-app></body>
    
    `;
  }
}
