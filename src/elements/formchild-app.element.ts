import { LitElement, html } from "lit-element";
import { customElement,property } from "lit/decorators";


@customElement("formchild-app")
class FormChildElement extends LitElement {
  //child component for retrieving the output from a form
  @property({type: String})
  firstName = "";
  @property({type: String})
  lastName = "";
  @property({type: String})
  gender = "";
  @property({type: String})
  description = "";
  @property({type: String})
  place = "";
  @property({type: String})
  red = "";
  @property({type: String})
  blue = "";
  @property({type: String})
  green = "";
  @property({type: String})
  purple = "";
  
      


    private onSubmit(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.gender);
        console.log(this.description);
        console.log(this.place);
        console.log(this.red);
        console.log(this.blue);
        console.log(this.green);
        console.log(this.purple);
    }
  render() {
    return html`
      <h2>This is the form child component</h2>
      <button @click=${this.onSubmit}>Submit</button>
      
      
     `;
  }
  
 

}
