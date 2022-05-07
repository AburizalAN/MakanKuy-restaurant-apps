/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const aboutMe = 'https://www.linkedin.com/in/aburizal-a-n/';
    const favorite = '#/favorite';

    this.innerHTML = `
        <nav>
          <div class="container">
            
            <div class="navbar-brand">
              <img src="/images/logo.png" alt="ini logo"/>
              <h1>makanKuy</h1>
            </div>

            <button class="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </button>

            <ul class="navList">
              <li><a href="/">Home</a></li>
              <li><a href=${favorite}>Favorite</a></li>
              <li><a href=${aboutMe}>About Me</a></li>
            </ul>

            <ul class="sideNavList disable">
              <li><a href="/">Home</a></li>
              <li><a href=${favorite}>Favorite</a></li>
              <li><a href=${aboutMe}>About Me</a></li>
            </ul>

          </div>
        </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
