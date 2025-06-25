import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const navbar = document.querySelector("nav");
      setScrolled(window.scrollY > 50);
      if (window.scrollY > screenHeight) {
        navbar?.classList.add("bg-dark-mid");
      } else if (window.scrollY > 50) {
        navbar?.classList.remove("bg-dark-mid");
        navbar?.classList.add("bg-dark-low");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-dark bg-transparent fixed-top p-0 ${
        scrolled ? "bg-dark-low" : ""
      }`}
    >
      <div className="container">
        {/* Toggler only visible on mobile */}
        <button
          className="d-block bg-transparent d-lg-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          &lt;/&gt;
        </a>
        {/* Desktop menu: visible on lg and up */}
        <div className="d-none d-lg-flex ms-auto">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Offcanvas menu: visible on mobile only */}
        <div
          className="offcanvas offcanvas-start d-lg-none bg-dark bg-gradient text-white"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          data-bs-scroll="false"
          data-bs-backdrop="true"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
