import Navbar from "../navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-filter"></div>
      <Navbar />
      <div className="header-block">
        <div className="header-text">
          <h1>
            <span className="header-web-text">ВЕБ</span>
            <span className="header-hyphen"> - </span>приложения
          </h1>
          <h2>для бизнеса</h2>
        </div>
        <div className="header-contacts">
          <div>
            <a href="#!">somebody2111@gmail.com</a>
          </div>
          <a className="header-scroll-link" href="#about">
            <div className="title-block__rows">
              <div className="title-block__rows-1">
                <div className="title-block__row-1"></div>
                <div className="title-block__row-2"></div>
              </div>

              <div className="title-block__rows-2">
                <div className="title-block__row-3"></div>
                <div className="title-block__row-4"></div>
              </div>
            </div>
          </a>
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
