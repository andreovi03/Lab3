export var Attribute6;
(function (Attribute6) {
    Attribute6["ttitle"] = "ttitle";
    Attribute6["date"] = "date";
    Attribute6["price"] = "price";
    Attribute6["console"] = "console";
    Attribute6["image"] = "image";
})(Attribute6 || (Attribute6 = {}));
class MyDigitalsell extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            ttitle: null,
            date: null,
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
            <link rel="stylesheet" href="./app/components/digitalsell/digitalsell.css">
            <section>
            <img src="${this.image}" alt="error">
            <h1>${this.ttitle}</h1>
            <span>${this.date}<span>
            <h2>${this.price}</h2>
            <h3>${this.console}</h3>
            </section>
            `;
        }
    }
}
customElements.define("my-digitalsell", MyDigitalsell);
export default MyDigitalsell;
