function Contact() {
  return (
    <div id="contact" className="no-select contactpage">
      <h1 className="title">C O N T A C T</h1>
      <div className="contact">
        <div className="contact_page">
          <h3>Narek Hakobyan</h3>
          <h5>Contact Info:</h5>
          <a href="tel:+16479664082">Telephone #</a>
          <br />
          <br />
          <a href="mailto:narek.hakobyan@mail.utoronto.ca">Email</a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/hakobyan-narek/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <br />
          <a
            href="https://github.com/hakobya4"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <br />
        </div>
        <form action="#" method="post" className="contact_me" id="contact-form">
          <br />
          <label htmlFor="contact-email" className="standard-label">
            E-mail:
          </label>
          <br />
          <input
            type="text"
            className="contactform"
            id="contact-email"
            name="email"
            placeholder="Your email.."
            required
          />
          <br />
          <label htmlFor="contact-telephone" className="standard-label">
            Telephone:
          </label>
          <br />
          <input
            type="text"
            className="contactform"
            id="contact-telephone"
            name="telephone"
            placeholder="Your telephone.."
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
          />
          <br />
          <label htmlFor="contact-message" className="standard-label">
            Message:
          </label>
          <br />
          <textarea
            type="text"
            className="contactform"
            id="contact-message"
            name="message"
            required
            maxLength="240px"
            placeholder="Your message.."
          ></textarea>
          <br />
          <button className="button_contact" type="submit" value="Submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
