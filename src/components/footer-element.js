/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
      Copyright © 2021 - makanKuy
    </footer>
    `;
  }
}

customElements.define('footer-element', Footer);
