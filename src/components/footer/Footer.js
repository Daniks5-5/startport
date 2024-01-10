import Form from "../form/Form";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="feedback">
      <Form></Form>
      <section className="footer-block">
        <p>&copy; 2023, Morin Nikita and Danil</p>
      </section>
    </footer>
  );
};

export default Footer;
