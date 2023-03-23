export var Attribute5;
(function (Attribute5) {
    Attribute5["name"] = "name";
    Attribute5["image"] = "image";
})(Attribute5 || (Attribute5 = {}));
class MyCharacters extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            name: null,
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
            <link rel="stylesheet" href="./app/components/characters/characters.css">
            <section id="charactersCard">
            <img src="${this.image}" alt="error">
            <h1>${this.name}</h1>
            </section>
            `;
        }
    }
}
customElements.define("my-characters", MyCharacters);
export default MyCharacters;
