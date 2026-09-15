import "../styles/Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-badge">✉️ Contact Us</span>

        <h1>
          We're Here to
          <span> Help You</span>
        </h1>

        <p>
          Have a question about your spiritual journey? Send us a message and
          we'll be happy to help.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            Whether you have a question, suggestion, or need help using
            Ziyaarah, we'd love to hear from you.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@ziyaarah.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="Your email" />

          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}