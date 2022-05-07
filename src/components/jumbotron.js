/* eslint-disable linebreak-style */
class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="jumbotron">
        <picture>
          <source media="(max-width: 600px)" srcset="/images/heros/hero-image_2-small.jpg">
          <img 
            src='/images/heros/hero-image_2-large.jpg' 
            alt="Hero-Image"
        </picture>
        <div class="overlay"></div>
        <div class="container">
          <h1>makanKuy</h1>
          <h2>Cari Tempat Makan Kuy</h2>
        </div>
      </section> 
    `;
  }
}

customElements.define('jumbo-tron', JumboTron);
