import { LitElement, html } from "lit-element";
import { customElement, property } from "lit/decorators";



@customElement("formparent-app")
class FormParentElement extends LitElement {
    //static get properties() { 
       // return { 
         // firstName: {type: String},
          //lastName: {type: String},
          //gender: {type: String},
          //red: {attribute: false},
          //blue: {attribute: false},
          //green: {attribute: false},
          //purple: {attribute: false},
          
        //};
      //}
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
      colour = "";
     
      
      
      private handleFirstName(e){
        this.firstName = e.target.value
        console.log(e.target)
      }
      private handleLastName(e){
        this.lastName = e.target.value
        console.log(e.target)
      }
      private handlegender(e){
        this.gender = e.target.value
        console.log(e.target)
      }
      private handledes(e){
        this.description = e.target.value
        console.log(e.target)
      }
      private handlecolour(e){
        this.colour = e.target.value
        console.log(e.target)
      }
     
      private handleplace(e){
        this.place = e.target.value
        console.log(e.target)
      }
      render() {
            return html`
            <h2>This is the form parent component</h2>
            <form>
            <label>First Name<input type ="text" name="firstName" @change=${(e)=>this.handleFirstName(e)} value=${this.firstName} placeholder="First Name"/></label><br />
            <label>Last Name<input type = "text" name="lastName" @change=${(e)=>this.handleLastName(e)} value=${this.lastName}   placeholder="Last Name"/></label><br />
            <label>Gender<br/>
            <label><input type = "radio" name = "gender" @change=${(e)=>this.handlegender(e)} value=${this.gender} value = "male"/>Male</label>
            <label><input type = "radio" name = "gender" @change=${(e)=>this.handlegender(e)} value=${this.gender} value = "female"/>Female</label><br/></label>
            <label >Favourite Colour<br/>
            <label><input type = "checkbox" name = "colour" value = "red" @change=${(e)=>this.handlecolour(e)} value=${this.colour}/>Red</label><br/>
            <label><input type = "checkbox" name = "colour" value = "blue" @change=${(e)=>this.handlecolour(e)} value=${this.colour}/>Blue</label><br/>
            <label><input type = "checkbox" name = "colour" value = "green" @change=${(e)=>this.handlecolour(e)} value=${this.colour}/>Green</label><br/>
            <label><input type = "checkbox" name = "colour" value = "purple" @change=${(e)=>this.handlecolour(e)} value=${this.colour}/>Purple</label><br/></label>
            <label><textarea name = "description" @change=${(e)=>this.handledes(e)} value=${this.description}>Description</textarea><label><br/>
            <select name="place" @change=${(e)=>this.handleplace(e)} value=${this.place}
            <option value = "">Please choose your birth place</option>
            <option value = "jalandhar">Jalandhar</option>
            <option value = "phagwara">Phagwara</option>
            <option value = "bathinda">Bathinda</option>
            <option value = "patiala">Patiala</option>
            <option value = "amritsar">Amritsar</option>>
            </select><br/>
            
            </form>
            
            <body><formchild-app firstName=${this.firstName} 
            lastName=${this.lastName} 
            gender=${this.gender} 
            description=${this.description} 
            place=${this.place} 
            colour=${this.colour} ></formchild-app></body>`;

        }
    }
