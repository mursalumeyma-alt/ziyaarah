
import Sidebar from "../layout/Sidebar";
import "../styles/Dashboard.css";

export default function DashboardLayout() {
  return (
    <>
    

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Assalamu Alaikum, Welcome Back</h1>
          <p>Continue your spiritual journey preparation</p>

          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <span>Active Journeys</span>
              <strong>3</strong>
              <div className="card-icon">📅</div>
            </div>

            <div className="dashboard-card">
              <span>Progress</span>
              <strong>50%</strong>
              <div className="card-icon">📈</div>
            </div>

            <div className="dashboard-card">
              <span>Completed Tasks</span>
              <strong>8</strong>
              <div className="card-icon">✓</div>
            </div>

            <div className="dashboard-card">
              <span>Total Tasks</span>
              <strong>16</strong>
              <div className="card-icon">📖</div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="journey-section">
            <div className="current-journey">
              <h2>📍 Current Journey</h2>

              <h3>Umrah 2024 - Spring</h3>
              <p>🕌 Umrah Pilgrimage</p>

              <div className="progress-box">
                <div>
                  <span>Overall Progress</span>
                  <strong>50%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>

              <p>📅 Start: 3/14/2024</p>
              <p>🕐 End: 3/21/2024</p>
            </div>

            <div className="journey-stages">
              <h2>🌐 Journey Stages</h2>

              <div className="stage">
                <div className="stage-number">1</div>

                <div>
                  <h3>Travel & Arrival</h3>
                  <p>2 of 4 tasks completed</p>
                </div>
              </div>

              <div className="stage">
                <div className="stage-number">2</div>

                <div>
                  <h3>Miqaat</h3>
                  <p>1 of 4 tasks completed</p>
                </div>
              </div>
            </div>
        
        </div>
        <div className="quick-cards">
  <div className="quick-card prayers-card">
    <div className="quick-icon">♡</div>
    <div>
      <h3>Daily Prayers</h3>
      <p>Track your spiritual practice</p>
    </div>
  </div>

  <div className="quick-card quran-card">
    <div className="quick-icon">📖</div>
    <div>
      <h3>Quran Study</h3>
      <p>Daily verses and reflection</p>
    </div>
  </div>

  <div className="quick-card community-card">
    <div className="quick-icon">🌐</div>
    <div>
      <h3>Community</h3>
      <p>Connect with fellow pilgrims</p>
    </div>
  </div>
</div>











        </main>
      </div>
    </>
  );
}