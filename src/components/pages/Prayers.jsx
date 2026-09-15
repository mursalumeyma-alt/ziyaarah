import "../styles/Prayers.css";

export default function Prayers() {
  return (
    <main className="prayers-page">
      <section className="prayers-hero">
        <span className="prayers-badge">🕌 Daily Prayers</span>

        <h1>
          Stay Connected
          <span> Through Prayer</span>
        </h1>

        <p>
          Keep track of your daily prayers and build a consistent spiritual
          routine throughout your sacred journey.
        </p>
      </section>

      <section className="prayer-list">
        <div className="prayer-card">
          <div className="prayer-icon">🌅</div>
          <div>
            <h3>Fajr</h3>
            <p>Morning Prayer</p>
          </div>
          <button>Mark Complete</button>
        </div>

        <div className="prayer-card">
          <div className="prayer-icon">☀️</div>
          <div>
            <h3>Dhuhr</h3>
            <p>Midday Prayer</p>
          </div>
          <button>Mark Complete</button>
        </div>

        <div className="prayer-card">
          <div className="prayer-icon">🌤️</div>
          <div>
            <h3>Asr</h3>
            <p>Afternoon Prayer</p>
          </div>
          <button>Mark Complete</button>
        </div>

        <div className="prayer-card">
          <div className="prayer-icon">🌇</div>
          <div>
            <h3>Maghrib</h3>
            <p>Sunset Prayer</p>
          </div>
          <button>Mark Complete</button>
        </div>

        <div className="prayer-card">
          <div className="prayer-icon">🌙</div>
          <div>
            <h3>Isha</h3>
            <p>Night Prayer</p>
          </div>
          <button>Mark Complete</button>
        </div>
      </section>
    </main>
  );
}