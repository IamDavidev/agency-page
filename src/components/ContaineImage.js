import cone from '../assets/desktop/image-gallery-cone.jpg'

class ContaineImage extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
     
    `;
}

connectedCallback(){
    this.name = this.getAttribute('name')
     this.render();
}

render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${ContaineImage.styles}</style>
 <div class='${this.name}'>
     hola munod 
</div>
    `;
}
}
customElements.define('containe-image',ContaineImage);