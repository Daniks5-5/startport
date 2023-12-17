import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#header">contacts</a>
        </li>
        <li>
          <a href="#about">about us</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#feedback">feedback</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
