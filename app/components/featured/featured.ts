export enum Attribute{
    "ttitle"= "ttitle",
    "description"= "description",
    "buttonDesc" = "buttonDesc",
    "image" = "image"
}

class MyFeatured extends HTMLElement{
    ttitle?: string
    description?: string
    buttonDesc?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute,null> ={
            ttitle : null,
            description :null,
            buttonDesc : null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined,newValue: string | undefined){
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
            <link rel="stylesheet" href="./app/components/featured/featured.css">
            <section>
            <h1>${this.ttitle}</h1>
            <img src="${this.image}" alt="error">
            <h2> ${this.description}</h2>
            <button>Shop now</button>
            </section>
            `
        }
    }

}

customElements.define("my-featured", MyFeatured)
export default MyFeatured;