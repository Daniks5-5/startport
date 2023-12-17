import Navbar from "../navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-filter"></div>
      <Navbar />
      <div className="header-block">
        <div className="header-text">
          <h1>
            <span>WEB </span>applications
          </h1>
          <h2>for business</h2>
        </div>
        <div className="header-contacts">
          <div>
            <a href="#!">somebody2111@gmail.com</a>
          </div>
          <div className="header-scroll-link">
            <p>scroll to explore</p>
            <div className="arrow">
              <div className="dote"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="101"
                viewBox="0 0 23 101"
                fill="none"
                className="arrow-body"
              >
                <path
                  d="M10.9251 100.066C11.5137 100.649 12.4634 100.644 13.0464 100.056L22.5459 90.4634C23.1288 89.8748 23.1242 88.9251 22.5356 88.3421C21.9469 87.7592 20.9972 87.7638 20.4143 88.3524L11.9703 96.8788L3.44391 88.4348C2.85529 87.8519 1.90555 87.8565 1.32262 88.4451C0.739682 89.0337 0.744292 89.9835 1.33292 90.5664L10.9251 100.066ZM10 0.00728147L10.0172 3.543L13.0171 3.52844L13 -0.00728147L10 0.00728147ZM10.0515 10.6144L10.0858 17.6859L13.0858 17.6713L13.0515 10.5999L10.0515 10.6144ZM10.1202 24.7573L10.1545 31.8287L13.1545 31.8142L13.1201 24.7427L10.1202 24.7573ZM10.1888 38.9002L10.2231 45.9716L13.2231 45.9571L13.1888 38.8856L10.1888 38.9002ZM10.2575 53.043L10.2918 60.1145L13.2918 60.0999L13.2574 53.0285L10.2575 53.043ZM10.3261 67.1859L10.3605 74.2574L13.3604 74.2428L13.3261 67.1714L10.3261 67.1859ZM10.3948 81.3288L10.4291 88.4002L13.4291 88.3857L13.3947 81.3142L10.3948 81.3288ZM10.4634 95.4717L10.4806 99.0074L13.4806 98.9928L13.4634 95.4571L10.4634 95.4717Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="header-phone">
            <a href="#!">+7 999 999 99 99</a>
            <a href="#!">+7 999 999 99 99</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
