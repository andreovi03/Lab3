export enum Attribute1{
    "description"= "description",
    "console" = "console",
    "image" = "image"
}

class MyJuegos extends HTMLElement{
    description?: string
    console?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute1,null> ={
            description :null,
            console : null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute1,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/juegos1/juegos.css">
            <section id="card">
            <img src="${this.image}" alt="error">
            <h2> ${this.description}</h2>
            <span>${this.console}<span>
            </section>
            `
        }
    }

}

customElements.define("my-juegos", MyJuegos)
export default MyJuegos;