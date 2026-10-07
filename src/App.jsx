import "./App.css";

const deployments = [
  {
    app: "Frontend Web",
    environment: "Production",
    status: "Success",
    version: "v1.4.2",
    time: "2 min ago",
  },
  {
    app: "API Service",
    environment: "Staging",
    status: "Running",
    version: "v2.1.0",
    time: "18 min ago",
  },
  {
    app: "Worker Service",
    environment: "Development",
    status: "Failed",
    version: "v0.9.8",
    time: "1 hour ago",
  },
];

const services = [
  { name: "Frontend", status: "Operational", uptime: "99.99%" },
  { name: "API", status: "Operational", uptime: "99.95%" },
  { name: "Database", status: "Operational", uptime: "99.98%" },
  { name: "CI/CD Pipeline", status: "Operational", uptime: "99.90%" },
];

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">D</div>
          <span>DevOpsLab</span>
        </div>

        <nav>
          <a className="active" href="#dashboard">
            <span>▦</span>
            Dashboard
          </a>
          <a href="#deployments">
            <span>🚀</span>
            Deployments
          </a>
          <a href="#pipelines">
            <span>⚙</span>
            Pipelines
          </a>
          <a href="#logs">
            <span>▤</span>
            Logs
          </a>
          <a href="#servers">
            <span>▣</span>
            Servers
          </a>
          <a href="#settings">
            <span>⚙</span>
            Settings
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user">
            <div className="avatar">JD</div>
            <div>
              <strong>John Doe</strong>
              <small>DevOps Engineer</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="header">
          <div>
            <p className="breadcrumb">Home / Dashboard</p>
            <h1>DevOps Dashboard</h1>
            <p className="subtitle">
              Monitor your applications and deployments
            </p>
          </div>

          <div className="header-actions">
            <button className="refresh-btn">↻ Refresh</button>
            <div className="notification">🔔</div>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span>Deployments</span>
              <div className="stat-icon purple">🚀</div>
            </div>
            <h2>128</h2>
            <p className="positive">↑ 12.5% <span>vs last month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Success Rate</span>
              <div className="stat-icon green">✓</div>
            </div>
            <h2>96.8%</h2>
            <p className="positive">↑ 2.4% <span>vs last month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Active Services</span>
              <div className="stat-icon blue">●</div>
            </div>
            <h2>24</h2>
            <p className="positive">↑ 3 <span>this month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Incidents</span>
              <div className="stat-icon red">!</div>
            </div>
            <h2>3</h2>
            <p className="negative">↓ 40% <span>vs last month</span></p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="content-grid">
          {/* Deployments */}
          <div className="card deployments">
            <div className="card-header">
              <div>
                <h3>Recent Deployments</h3>
                <p>Latest application deployments</p>
              </div>
              <button className="view-btn">View All →</button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Environment</th>
                    <th>Status</th>
                    <th>Version</th>
                    <th>Time</th>
                  </tr>
                </thead>

                <tbody>
                  {deployments.map((deployment, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{deployment.app}</strong>
                      </td>

                      <td>
                        <span className="environment">
                          {deployment.environment}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status ${deployment.status.toLowerCase()}`}
                        >
                          <i></i>
                          {deployment.status}
                        </span>
                      </td>

                      <td>
                        <code>{deployment.version}</code>
                      </td>

                      <td className="time">{deployment.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Health */}
          <div className="card health">
            <div className="card-header">
              <div>
                <h3>System Health</h3>
                <p>Current service status</p>
              </div>
              <span className="online">
                <i></i> All systems operational
              </span>
            </div>

            <div className="services">
              {services.map((service, index) => (
                <div className="service" key={index}>
                  <div className="service-left">
                    <div className="service-icon">●</div>
                    <div>
                      <strong>{service.name}</strong>
                      <small>{service.status}</small>
                    </div>
                  </div>

                  <div className="uptime">
                    <strong>{service.uptime}</strong>
                    <small>uptime</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environments */}
        <section className="card environments">
          <div className="card-header">
            <div>
              <h3>Environments</h3>
              <p>Application environments</p>
            </div>
          </div>

          <div className="environment-grid">
            <div className="environment-card">
              <div className="env-header">
                <div className="env-icon dev">DEV</div>
                <span className="status running">
                  <i></i> Running
                </span>
              </div>
              <h4>Development</h4>
              <p>Latest build: #482</p>
              <div className="progress">
                <div style={{ width: "92%" }}></div>
              </div>
              <small>92% resources available</small>
            </div>

            <div className="environment-card">
              <div className="env-header">
                <div className="env-icon staging">STG</div>
                <span className="status running">
                  <i></i> Running
                </span>
              </div>
              <h4>Staging</h4>
              <p>Latest build: #479</p>
              <div className="progress">
                <div style={{ width: "74%" }}></div>
              </div>
              <small>74% resources available</small>
            </div>

            <div className="environment-card">
              <div className="env-header">
                <div className="env-icon production">PROD</div>
                <span className="status success">
                  <i></i> Healthy
                </span>
              </div>
              <h4>Production</h4>
              <p>Latest build: #476</p>
              <div className="progress">
                <div style={{ width: "88%" }}></div>
              </div>
              <small>88% resources available</small>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="card pipeline">
          <div className="card-header">
            <div>
              <h3>CI/CD Pipeline</h3>
              <p>Latest pipeline execution</p>
            </div>
            <span className="pipeline-id">Pipeline #482</span>
          </div>

          <div className="pipeline-steps">
            <div className="pipeline-step completed">
              <div className="step-circle">✓</div>
              <div>
                <strong>Build</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="pipeline-line completed-line"></div>

            <div className="pipeline-step completed">
              <div className="step-circle">✓</div>
              <div>
                <strong>Test</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="pipeline-line completed-line"></div>

            <div className="pipeline-step completed">
              <div className="step-circle">✓</div>
              <div>
                <strong>Docker Build</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="pipeline-line"></div>

            <div className="pipeline-step pending">
              <div className="step-circle">4</div>
              <div>
                <strong>Deploy</strong>
                <small>Waiting</small>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>DevOpsLab Demo</span>
          <span>Frontend-only project • Mock data</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
