import Form from "../form/Form";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="form-block">
        <h2>Let’s talk!</h2>
        <Form></Form>
      </section>
      <section class="footer-block">
        <p>&copy; 2023, Morin Nikita and Danil</p>
      </section>
    </footer>
  );
};

export default Footer;
