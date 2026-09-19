import "../styles/Trips.css";
export default function Trips() {
  return (
    <main className="trips-page">
      <h1>Trip Planner</h1>
      <p>Plan and manage your Hajj or Umrah journey.</p>

      <div className="trip-card">
        <h2>🕌 Umrah Journey</h2>
        <p>Plan your spiritual journey step by step.</p>

        <div className="trip-info">
          <span>📅 7 Days</span>
          <span>📍 Makkah & Madinah</span>
        </div>

    <button onClick={() => alert("Trip planning started!")}>
  Start Planning
</button>
      </div>
    </main>
  );
}