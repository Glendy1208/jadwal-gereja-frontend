import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Pelayan Tuhan",
      path: "/admin/pelayan-tuhan",
      icon: "👥",
    },
    {
      name: "Jadwal Ibadah",
      path: "/admin/jadwal-ibadah",
      icon: "📅",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
