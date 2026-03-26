import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full shadow-lg">
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wider text-blue-400">GEREJA<span className="text-white">KU</span></h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {/* Menu Home */}
        <Link to="/admin/home" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white text-gray-300 rounded-lg transition-colors">
          <span className="font-medium">Home</span>
        </Link>

        {/* Menu Pelayan Tuhan */}
        <Link to="/admin/pelayan-tuhan" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white text-gray-300 rounded-lg transition-colors">
          <span className="font-medium">Pelayan Tuhan</span>
        </Link>
        
        {/* Menu Jadwal Ibadah */}
        <Link to="/admin/jadwal-ibadah" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white text-gray-300 rounded-lg transition-colors">
          <span className="font-medium">Jadwal Ibadah</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white transition-colors">
          Keluar
        </button>
      </div>
    </aside>
  );
}