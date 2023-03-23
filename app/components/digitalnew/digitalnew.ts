export enum Attribute7{
    "ttitle"= "ttitle",
    "date" = "date",
    "description" = "description",
    "price" = "price",
    "console" = "console",
    "image" = "image"
}

class MyDigitalnew extends HTMLElement{
    ttitle?: string
    date?: string
    description?: string
    price?: string
    console?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute7,null> ={
            ttitle : null,
            date : null,
            description :null, 
            price : null,
            console : null,
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute7,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/digitalnew/digitalnew.css">
            <section>
            <img src="${this.image}" alt="error">
            <h1>${this.ttitle}</h1>
            <span>${this.date}<span>
            <h2>${this.description}</h2>
            <h3>${this.price}</h3>
            <h4>${this.console}</h4>
            </section>
            `
        }
    }

}

customElements.define("my-digitalnews", MyDigitalnew)
export default MyDigitalnew;