import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
    isActive
      ? "bg-blue-500 text-white shadow"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
  }`;

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full shadow-lg">
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wider text-blue-400">GEREJA<span className="text-white">KU</span></h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {/* Menu Home */}
        <NavLink to="/admin/home" className={getNavLinkClass}>
          <span>Home</span>
        </NavLink>

        {/* Menu Pelayan Tuhan */}
        <NavLink to="/admin/pelayan-tuhan" className={getNavLinkClass}>
          <span>Pelayan Tuhan</span>
        </NavLink>
        
        {/* Menu Jadwal Ibadah */}
        <NavLink to="/admin/jadwal-ibadah" className={getNavLinkClass}>
          <span>Jadwal Ibadah</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white transition-colors">
          Keluar
        </button>
      </div>
    </aside>
  );
}