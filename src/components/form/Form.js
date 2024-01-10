import "./form.css";
const Form = () => {
  return (
    <section className="form-block">
      <h2>Давайте поговорим</h2>
      <form action="" name="feedback" method="POST" className="feedback-form">
        <div className="feedback-inputs">
          <input type="text" placeholder="Ваше имя" name="" />
          <input type="email" placeholder="Email" name="" />
          <input type="phone" placeholder="Телефон" name="" />
        </div>
        <input
          type="submit"
          value="оставить заявку"
          className="feedback-submit"
        />
        <div className="feedback-email">
          <h4>напишите нам сразу на почту</h4>

          <div className="feedback-email-block">
            <a href="mailto:">
              <i></i>
              <p>somebody2111@gmail.com</p>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
