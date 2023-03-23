export var Attribute2;
(function (Attribute2) {
    Attribute2["ttitle"] = "ttitle";
    Attribute2["description"] = "description";
    Attribute2["buttonDesc"] = "buttonDesc";
    Attribute2["image"] = "image";
})(Attribute2 || (Attribute2 = {}));
class MyOnlinegames extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            ttitle: null,
            description: null,
            buttonDesc: null,
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
            <link rel="stylesheet" href="./app/components/onlinegames/onlinegames.css">
            <section id="onlinegames">
            <div class="card">
                <h1>${this.ttitle}</h1>
                <img src="${this.image}" alt="error">
                <h3> ${this.description}</h3>
                <button>Start Shopping</button>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("my-onlinegames", MyOnlinegames);
export default MyOnlinegames;
