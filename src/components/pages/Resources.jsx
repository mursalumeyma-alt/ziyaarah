import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Resources.css";

const resources = [
  {
    id: 1,
    title: "The Complete Guide to Umrah",
    description:
      "A practical guide covering the essential steps, preparations, and rituals of Umrah.",
    type: "PDF",
    category: "Umrah",
    featured: true,
  },
  {
    id: 2,
    title: "How to Perform Hajj",
    description:
      "Learn the major rites of Hajj and what to expect throughout your pilgrimage.",
    type: "Video",
    category: "Hajj",
    featured: true,
  },
  {
    id: 3,
    title: "Daily Duas for Pilgrims",
    description:
      "A collection of authentic supplications to use during your spiritual journey.",
    type: "Guide",
    category: "Duas",
    featured: true,
  },
  {
    id: 4,
    title: "Ihram: Rules and Guidelines",
    description:
      "Understand the rules, restrictions, and preparation for entering Ihram.",
    type: "PDF",
    category: "Umrah",
  },
  {
    id: 5,
    title: "Tawaf Guide",
    description:
      "Step-by-step guidance for performing Tawaf correctly.",
    type: "Guide",
    category: "Umrah",
  },
  {
    id: 6,
    title: "Sa'i Between Safa and Marwah",
    description:
      "Learn the significance and method of performing Sa'i.",
    type: "Video",
    category: "Umrah",
  },
  {
    id: 7,
    title: "Essential Hajj Duas",
    description:
      "Important supplications to memorize before and during Hajj.",
    type: "PDF",
    category: "Duas",
  },
  {
    id: 8,
    title: "Prayer at the Haram",
    description:
      "Helpful guidance about prayers and etiquette at Masjid al-Haram.",
    type: "Guide",
    category: "Prayer",
  },
  {
    id: 9,
    title: "Visiting Madinah",
    description:
      "A guide to visiting important places and maintaining proper etiquette in Madinah.",
    type: "Guide",
    category: "Madinah",
  },
];

const typeClass = {
  PDF: "badge-pdf",
  Video: "badge-video",
  Guide: "badge-guide",
};

function ResourceBadge({ type }) {
  return <span className={`type-badge ${typeClass[type] || ""}`}>{type}</span>;
}

export default function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || resource.category === category;

      const matchesType = type === "All" || resource.type === type;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [search, category, type]);

  const featuredResources = resources.filter((resource) => resource.featured);

  const handleAccess = (resource) => {
    alert(`Opening: ${resource.title}`);
  };

  return (
    <div className="resources-page">
      <div className="resources-dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <div>
            <div className="logo">Ziyarah</div>

            <nav className="sidebar-nav">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/trip-planner">Trip Planner</Link>
              <Link to="/ritual-tracker">Ritual Tracker</Link>
              <Link to="/resources" className="active">
                Resources
              </Link>
            </nav>
          </div>

          <div className="sidebar-bottom">
            <div className="user-profile">
              <div className="user-avatar">U</div>
              <div>
                <strong>User</strong>
                <span>Pilgrim</span>
              </div>
            </div>

            <button className="sign-out">Sign Out</button>
          </div>
        </aside>

      {/* Main Content */}
        <main className="resources-content">
          <header className="page-header">
            <div>
              <h1>Resource Library</h1>
              <p>
                Access authentic Islamic resources for your spiritual journey.
              </p>
            </div>
          </header>

          {/* Filters */}
          <section className="filters">
            <div className="search-wrapper">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
            </div>

            <select
              className="filter-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Umrah">Umrah</option>
              <option value="Hajj">Hajj</option>
              <option value="Duas">Duas</option>
              <option value="Prayer">Prayer</option>
              <option value="Madinah">Madinah</option>
            </select>

            <select
              className="filter-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="PDF">PDF</option>
              <option value="Video">Video</option>
              <option value="Guide">Guide</option>
            </select>
          </section>

          {/* Featured */}
          <section className="resource-section">
            <div className="section-heading">
              <div>
                <h2>Featured Resources</h2>
                <p>Recommended resources to help prepare for your journey.</p>
              </div>
            </div>

            <div className="featured-grid">
              {featuredResources.map((resource) => (
                <article className="featured-card" key={resource.id}>
                  <div className="card-top">
                    <ResourceBadge type={resource.type} />
                    <span className="featured-badge">Featured</span>
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <div className="card-footer">
                    <span className="category-badge">
                      {resource.category}
                    </span>

                    <button
                      className="access-button"
                      onClick={() => handleAccess(resource)}
                    >
                      Access
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
           {/* All Resources */}
          <section className="resource-section all-resources">
            <div className="section-heading">
              <div>
                <h2>All Resources</h2>
                <p>
                  {filteredResources.length} resources available
                </p>
              </div>
            </div>

            {filteredResources.length > 0 ? (
              <div className="resource-list">
                {filteredResources.map((resource) => (
                  <article className="resource-row" key={resource.id}>
                    <div className="resource-icon">
                      {resource.type === "Video" ? "▶️" : "▤"}
                    </div>

                    <div className="resource-info">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>

                      <div className="resource-meta">
                        <ResourceBadge type={resource.type} />
                        <span className="category-badge">
                          {resource.category}
                        </span>
                      </div>
                    </div>

                    <button
                      className="access-button"
                      onClick={() => handleAccess(resource)}
                    >
                      Access
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No resources found</h3>
                <p>Try changing your search or filters.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
