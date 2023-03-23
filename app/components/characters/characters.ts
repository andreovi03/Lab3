export enum Attribute5{
    "name"= "name",
    "image" = "image"
}

class MyCharacters extends HTMLElement{
    name?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute5,null> ={
            name : null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute5,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/characters/characters.css">
            <section id="charactersCard">
            <img src="${this.image}" alt="error">
            <h1>${this.name}</h1>
            </section>
            `
        }
    }

}

customElements.define("my-characters", MyCharacters)
export default MyCharacters;