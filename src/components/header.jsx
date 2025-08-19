import React from "react";
import { Link } from "gatsby-link";
import classNames from "classnames";
import Logo from "./logo";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const menuClasses = classNames("hamburger", "hamburger--spin", {
      "is-active": this.state.menuOpen,
    });

    const mobileNavClasses = classNames("nav", "nav__mobile", {
      "nav__mobile--open": this.state.menuOpen,
    });

    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="header__logo">
                <Link to="/" onClick={() => (this.state.menuOpen = false)}>
                  <Logo />
                </Link>
              </div>
              <div className="header__navHolder">
                <div className="nav nav--desktop">
                  <div className="nav__links">
                    <div className="nav__link">
                      <Link to="/blog">Blog.</Link>
                    </div>
                    <div className="nav__link">
                      <Link to="/my-work">My work.</Link>
                    </div>
                    {/* <div className="nav__link nav__link--bordered">
                      <Link to="/get-in-touch">
                        Get in touch.
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="menu">
                  <div
                    className="menu__toggle"
                    onClick={() => this.toggleMenu()}
                  >
                    <div className={menuClasses}>
                      <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={mobileNavClasses}>
          <div className="nav__links">
            <div className="nav__link">
              <Link to="/my-work" onClick={() => (this.state.menuOpen = false)}>
                My work.
              </Link>
            </div>
            <div className="nav__link">
              <Link to="/blog" onClick={() => (this.state.menuOpen = false)}>
                Blog.
              </Link>
            </div>
            {/* <div className="nav__link nav__link--bordered">
              <Link to="/get-in-touch" onClick={() => this.state.menuOpen = false}>
                Get in touch.
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
