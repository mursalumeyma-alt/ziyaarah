import "../styles/Events.css";

export default function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <span className="events-badge">📅 Islamic Events</span>

        <h1>
          Discover Upcoming
          <span> Islamic Events</span>
        </h1>

        <p>
          Stay connected with important Islamic events, gatherings, and
          spiritual activities.
        </p>
      </section>

      <section className="events-list">
        <div className="event-card">
          <div className="event-date">
            <strong>15</strong>
            <span>SHAWWAL</span>
          </div>

          <div className="event-info">
            <h2>Islamic Lecture</h2>
            <p>Join us for an inspiring evening of Islamic learning.</p>
            <span>📍 Community Center</span>
          </div>

          <button>View Event</button>
        </div>

        <div className="event-card">
          <div className="event-date">
            <strong>20</strong>
            <span>SHAWWAL</span>
          </div>

          <div className="event-info">
            <h2>Quran Study Circle</h2>
            <p>Learn, reflect, and connect with the Quran.</p>
            <span>📍 Online</span>
          </div>

          <button>View Event</button>
        </div>

        <div className="event-card">
          <div className="event-date">
            <strong>25</strong>
            <span>SHAWWAL</span>
          </div>

          <div className="event-info">
            <h2>Community Gathering</h2>
            <p>Connect with the Muslim community and share knowledge.</p>
            <span>📍 Nairobi</span>
          </div>

          <button>View Event</button>
        </div>
      </section>
    </main>
  );
}