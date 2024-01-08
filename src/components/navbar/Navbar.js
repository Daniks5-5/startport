import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#services">УСЛУГИ</a>
        </li>
        <li>
          <a href="#header">КОНТАКТЫ</a>
        </li>
        <li>
          <a href="#about">О НАС</a>
        </li>
        <li>
          <a href="#feedback">НАПИСАТЬ НАМ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
