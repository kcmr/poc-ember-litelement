import{LitElement,html}from"lit-element"
function camelCase(e,t=[]){const n=Array.isArray(t)?t:[t],a=new RegExp(`[${n.join("")}].`,"g")
return e.replace(a,e=>e.charAt(1).toUpperCase())}function dashToCamel(e){return camelCase(e,"-")}function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}function runCallback(e,t){const n=`on${capitalize(dashToCamel(e))}`
"function"==typeof this[n]&&this[n](t)}class InAppComponent extends LitElement{static get properties(){return{name:{type:String},someProp:{type:Object}}}constructor(){super(),this.onNameChanged=(()=>{}),this.fireEventWithCallback=((e,t)=>{const n=new CustomEvent(e,t)
this.dispatchEvent(n),runCallback.call(this,e,n)})}updated(e){e.has("name")&&void 0!==e.get("name")&&(this._onNameChanged(),console.log("someProp",this.someProp))}_onNameChanged(){this.fireEventWithCallback("name-changed",{composed:!0,detail:this.name})}_onButtonClick(){this.name+="-a"}render(){return html`
      <p>Hola ${this.name}</p>
      <button @click="${this._onButtonClick}">Change name</button>
    `}}customElements.define("in-app-component",InAppComponent)
