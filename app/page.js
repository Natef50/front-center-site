const services = [
  {
    title: 'Balloon Installations',
    description: 'Statement arches, garlands, and organic installations designed for birthdays, showers, and branded events.'
  },
  {
    title: 'Holiday Decor',
    description: 'Seasonal setups for homes and storefronts with clean styling that photographs beautifully.'
  },
  {
    title: 'Custom Events',
    description: 'From intimate dinners to large celebrations, we design decor plans around your venue and vibe.'
  }
];

const highlights = [
  'Based in Southern California',
  'Installations starting at $250',
  'Typical project range: $300–$800',
  'Response time: within 24 hours'
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="container heroContent">
          <p className="eyebrow">Front & Center Decor</p>
          <h1>Make your home the moment.</h1>
          <p className="heroSubtitle">
            Custom balloon installs, holiday decor, and photo-ready setups designed to make every celebration feel elevated.
          </p>
          <div className="heroActions">
            <a href="#booking" className="button primary">Get a Quote</a>
            <a href="sms:+18587699966" className="button secondary">Text Us</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Featured Setups</h2>
            <p>A quick look at recent designs.</p>
          </div>
          <div className="galleryGrid">
            <img src="/image1.jpg" alt="Balloon arch with heart accents for a special event" />
            <img src="/image2.jpg" alt="Styled decor setup with balloons and table details" />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="sectionHeader">
            <h2>Services</h2>
            <p>Everything is tailored to your space and event style.</p>
          </div>
          <div className="cardGrid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoCol">
          <div>
            <h2>Pricing Snapshot</h2>
            <p>
              Every setup is unique, but most clients invest between <strong>$300 and $800</strong> depending on scale,
              materials, and installation complexity.
            </p>
          </div>
          <ul className="highlightList">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="booking" className="section soft">
        <div className="container bookingWrap">
          <div>
            <h2>Book Your Setup</h2>
            <p>Share a few details and we’ll follow up with a custom quote.</p>
          </div>
          <form className="bookingForm">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(555) 123-4567" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Event Details
              <textarea name="details" placeholder="Date, location, style, and anything we should know" rows="5" />
            </label>
            <button type="submit" className="button primary">Request Quote</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container legal">
          <div>
            <h3>Accessibility</h3>
            <p>
              We are committed to making our site accessible to all users. If you run into any issue, contact us and we
              will help directly.
            </p>
          </div>
          <div>
            <h3>Privacy</h3>
            <p>We collect basic contact details only to respond to inquiries. We do not sell or share personal data.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
