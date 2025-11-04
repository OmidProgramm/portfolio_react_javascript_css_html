import './Header.css';
function Header(){
    return (
        <header>
      <div class="navbar-container">
        <div class="container d-flex justify-content-between align-items-center">
          <h2 class="logo">developcoding</h2>
          <nav class="navbar">
            <ul class="d-flex">
              <li><a className="nav-link" href="#hero">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#services">Services</a></li>
              <li><a className="nav-link" href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <h1 class="hero-title">I am a Developer</h1>
      <p class="hero-desc">Hello, world!</p>
    </header>

    );
}

export default Header;