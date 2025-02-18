const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Create New Project</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            New Project
          </button>
        </div>
        {/* Project list will go here */}
      </div>
    </div>
  );
};

export default Dashboard;
