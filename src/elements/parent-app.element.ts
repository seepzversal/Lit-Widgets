import { LitElement, html } from "lit-element";
import { customElement, property } from "lit/decorators";



@customElement("parent-app")
class ParentElement extends LitElement {
//using @property defines the count variable to zero
@property({type: Number})
count = 0;
   
    
    render() {
        
        //return html`
        //<h2>This is the parent</h2>
        //<button type="button">+</button>
        //<button type="button">-</button>
        //<h2>${this.count}</h2>
        
        //<child-app></child-app>
            return html`
            <h2>This is the parent component</h2>
            <button @click=${this.increment}>+</button>
            <button @click=${this.decrement}>-</button>
            <h2> ${this.count}</h2>
            
            <body><child-app></child-app></body>`;
        }
        //for incrementing the counter by 10
        private increment() {
            this.count=this.count+10;
        }
        //for decrementing the counter by 10
        private decrement() {
            this.count=this.count-10;
        }
       
        
         

}
