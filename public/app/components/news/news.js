export var Attribute3;
(function (Attribute3) {
    Attribute3["ttitle"] = "ttitle";
    Attribute3["subtitle"] = "subtitle";
    Attribute3["date"] = "date";
    Attribute3["button"] = "button";
    Attribute3["image"] = "image";
})(Attribute3 || (Attribute3 = {}));
class MyNews extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            ttitle: null,
            subtitle: null,
            date: null,
            button: null,
            image: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/news/news.css">
            <section id="news">
            <img src="${this.image}" alt="error">
            <span>${this.date}<span>
            <h1>${this.ttitle}</h1>
            <h2> ${this.subtitle}</h2>
            <button>${this.button}</button>
            </section>
            `;
        }
    }
}
customElements.define("my-news", MyNews);
export default MyNews;
