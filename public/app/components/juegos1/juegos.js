export var Attribute1;
(function (Attribute1) {
    Attribute1["description"] = "description";
    Attribute1["console"] = "console";
    Attribute1["image"] = "image";
})(Attribute1 || (Attribute1 = {}));
class MyJuegos extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            description: null,
            console: null,
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
            <link rel="stylesheet" href="./app/components/juegos1/juegos.css">
            <section id="card">
            <img src="${this.image}" alt="error">
            <h2> ${this.description}</h2>
            <span>${this.console}<span>
            </section>
            `;
        }
    }
}
customElements.define("my-juegos", MyJuegos);
export default MyJuegos;
