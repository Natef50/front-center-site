export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#ffe4ec"
      }}>
        <h1 style={{ fontSize: 36 }}>Make Your Home the Moment</h1>
        <p style={{ marginTop: 10 }}>
          Custom balloon installs, holiday decor, and photo-ready setups in Southern California
        </p>

        <div style={{ marginTop: 20 }}>
          <a href="#booking">
            <button style={{ padding: 12, marginRight: 10 }}>Get a Quote</button>
          </a>
          <a href="sms:+4242410570">
            <button style={{ padding: 12 }}>Text Us</button>
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: 20 }}>
        <h2>Featured Setups</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10
        }}>
          <img src="/image1.jpg" alt="Balloon arch with hearts" style={{ width: "100%" }} />
          <img src="/image2.jpg" alt="Valentine decor setup" style={{ width: "100%" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: 20 }}>
        <h2>Services</h2>
        <ul>
          <li>Balloon Installations</li>
          <li>Holiday Decor</li>
          <li>Custom Events</li>
        </ul>
      </section>

      {/* PRICING */}
      <section style={{ padding: 20 }}>
        <h2>Pricing</h2>
        <p>Installations starting at $250</p>
        <p>Most clients spend $300–$800 depending on size</p>
      </section>

      {/* BOOKING */}
      <section id="booking" style={{ padding: 20 }}>
        <h2>Book Your Setup</h2>
        <p>We respond within 24 hours</p>

        <form style={{ marginTop: 20 }}>
          <input placeholder="Name" style={{ display: "block", marginBottom: 10 }} />
          <input placeholder="Phone" style={{ display: "block", marginBottom: 10 }} />
          <input placeholder="Email" style={{ display: "block", marginBottom: 10 }} />
          <textarea placeholder="Tell us about your setup" style={{ display: "block", marginBottom: 10 }} />
          <button>Request Quote</button>
        </form>
      </section>

      {/* POLICIES */}
      <section style={{ padding: 20, fontSize: 12 }}>
        <h3>Accessibility</h3>
        <p>
          We are committed to making our website accessible to all users. If you experience any difficulty,
          please contact us and we will assist you.
        </p>

        <h3>Privacy</h3>
        <p>
          We collect basic contact information to respond to inquiries. We do not sell or share your data.
        </p>
      </section>

    </main>
  );
}
