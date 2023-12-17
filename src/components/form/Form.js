import "./form.css";
const Form = () => {
  return (
    <form action="" name="feedback" method="POST" className="feedback-form">
      <h3>
        Interested in working together or have a question? Feel free to reach
        out. I'm here to help you turn your ideas into amazing digital
        realities. Looking forward to hearing from you soon!
      </h3>
      <div className="feedback-inputs">
        <input type="text" placeholder="Your name" name="" />
        <input type="email" placeholder="Email" name="" />
        <input type="phone" placeholder="Phone" name="" />
      </div>
      <input
        type="submit"
        value="submit your application"
        class="feedback-submit"
      />
      <div class="feedback-email">
        <h4>write to us immediately by email</h4>

        <div class="feedback-email-block">
          <a href="mailto:">
            <i></i>
            <p>somebody2111@gmail.com</p>
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;
