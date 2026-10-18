function DashboardItem({label, value}) {
  return (
    <div className="dashboard-item">
      <span className="dashboard-label">{label}: </span>
      <span className="dashboard-value">{value}</span>
    </div>
  );
}

function Dashboard({formData}) {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard</p>

      <div className="dashboard-container">
        <DashboardItem label="Name" value={formData.name} />
        <DashboardItem label="Email" value={formData.email} />
        <DashboardItem label="Experience" value={formData.experience} />
        <DashboardItem label="Stack" value={formData.stack} />
        <DashboardItem label="Preferred Role" value={formData.preferredRole} />
        <DashboardItem label="Work Preference" value={formData.workPreference} />
      </div>
    </section>
  );
}

export default Dashboard;