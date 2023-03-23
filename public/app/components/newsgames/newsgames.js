export var Attribute4;
(function (Attribute4) {
    Attribute4["ttitle"] = "ttitle";
    Attribute4["date"] = "date";
    Attribute4["button"] = "button";
    Attribute4["image"] = "image";
})(Attribute4 || (Attribute4 = {}));
class MyNewsgames extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            ttitle: null,
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
            <link rel="stylesheet" href="./app/components/newsgames/newsgames.css">
            <section id="games">
            <img src="${this.image}" alt="error">
            <h2> ${this.date}</h2>
            <h1>${this.ttitle}</h1>
            <button><h2>${this.button}</h2></button>
            </section>
            `;
        }
    }
}
customElements.define("my-newsgames", MyNewsgames);
export default MyNewsgames;
