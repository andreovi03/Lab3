export enum Attribute6{
    "ttitle"= "ttitle",
    "date" = "date",
    "price" = "price",
    "console" = "console",
    "image" = "image"
}

class MyDigitalsell extends HTMLElement{
    ttitle?: string
    date?: string
    price?: string
    console?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute6,null> ={
            ttitle : null,
            date : null,
            price :null, 
            console :null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute6,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/digitalsell/digitalsell.css">
            <section>
            <img src="${this.image}" alt="error">
            <h1>${this.ttitle}</h1>
            <span>${this.date}<span>
            <h2>${this.price}</h2>
            <h3>${this.console}</h3>
            </section>
            `
        }
    }

}

customElements.define("my-digitalsell", MyDigitalsell)
export default MyDigitalsell;