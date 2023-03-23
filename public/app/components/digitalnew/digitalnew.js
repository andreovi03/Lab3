export var Attribute7;
(function (Attribute7) {
    Attribute7["ttitle"] = "ttitle";
    Attribute7["date"] = "date";
    Attribute7["description"] = "description";
    Attribute7["price"] = "price";
    Attribute7["console"] = "console";
    Attribute7["image"] = "image";
})(Attribute7 || (Attribute7 = {}));
class MyDigitalnew extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            ttitle: null,
            date: null,
            description: null,
            price: null,
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
            <link rel="stylesheet" href="./app/components/digitalnew/digitalnew.css">
            <section>
            <img src="${this.image}" alt="error">
            <h1>${this.ttitle}</h1>
            <span>${this.date}<span>
            <h2>${this.description}</h2>
            <h3>${this.price}</h3>
            <h4>${this.console}</h4>
            </section>
            `;
        }
    }
}
customElements.define("my-digitalnews", MyDigitalnew);
export default MyDigitalnew;
