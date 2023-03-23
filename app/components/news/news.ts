export enum Attribute3{
    "ttitle"= "ttitle",
    "subtitle"= "subtitle",
    "date" = "date",
    "button" = "button",
    "image" = "image"
}

class MyNews extends HTMLElement{
    ttitle?: string
    subtitle?: string
    date?: string
    button?: string
    image?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute3,null> ={
            ttitle : null,
            subtitle :null,
            date : null,
            button :null, 
            image : null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute3,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/news/news.css">
            <section id="news">
            <img src="${this.image}" alt="error">
            <span>${this.date}<span>
            <h1>${this.ttitle}</h1>
            <h2> ${this.subtitle}</h2>
            <button>${this.button}</button>
            </section>
            `
        }
    }

}

customElements.define("my-news", MyNews)
export default MyNews;