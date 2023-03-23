export enum Attribute2{
    "ttitle"= "ttitle",
    "description"= "description",
    "buttonDesc" = "buttonDesc",
    "image" = "image"
}

class MyOnlinegames extends HTMLElement{
    ttitle?: string
    description?: string
    buttonDesc?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute2,null> ={
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

    attributeChangedCallback(propName: Attribute2,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/onlinegames/onlinegames.css">
            <section id="onlinegames">
            <div class="card">
                <h1>${this.ttitle}</h1>
                <img src="${this.image}" alt="error">
                <h3> ${this.description}</h3>
                <button>Start Shopping</button>
            </div>
            </section>
            `
        }
    }

}

customElements.define("my-onlinegames", MyOnlinegames)
export default MyOnlinegames;