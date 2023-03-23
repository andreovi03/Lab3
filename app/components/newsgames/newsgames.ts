export enum Attribute4{
    "ttitle"= "ttitle",
    "date"= "date",
    "button" = "button",
    "image" = "image"
}

class MyNewsgames extends HTMLElement{
    ttitle?: string
    date?: string
    button?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute4,null> ={
            ttitle : null,
            date :null,
            button : null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute4,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/newsgames/newsgames.css">
            <section>
            <img src="${this.image}" alt="error">
            <p> ${this.date}</p>
            <h1>${this.ttitle}</h1>
            <button>${this.button}<button>
            </section>
            `
        }
    }

}

customElements.define("my-newsgames", MyNewsgames)
export default MyNewsgames;