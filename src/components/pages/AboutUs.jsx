import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <span className="about-badge">✦ About Ziyaarah</span>

          <h1>
            Your Sacred Journey,
            <span> Prepared With Faith</span>
          </h1>

          <p>
            Ziyaarah is a spiritual journey planner designed to help Muslims
            prepare for Hajj and Umrah with confidence, organization, and
            meaningful spiritual guidance.
          </p>
        </div>

        <div className="about-image">
          <img src="/images/makkah.png" alt="Makkah" />
        </div>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to make spiritual preparation easier by bringing
          journey planning, ritual guidance, learning resources, and useful
          tools together in one place.
        </p>
      </section>

      <section className="about-features">
        <div className="about-card">
          <h3>🕌 Spiritual Preparation</h3>
          <p>
            Prepare yourself spiritually with helpful resources and guidance.
          </p>
        </div>

        <div className="about-card">
          <h3>📋 Journey Planning</h3>
          <p>
            Organize your Hajj or Umrah journey with clear planning tools and
            checklists.
          </p>
        </div>

        <div className="about-card">
          <h3>📖 Authentic Resources</h3>
          <p>
            Access useful Islamic learning materials throughout your journey.
          </p>
        </div>
      </section>
    </main>
  );
}