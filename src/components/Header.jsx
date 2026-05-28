export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Jadwal Pelayanan Gereja</h1>
          <p className="text-sm text-gray-600">Admin Dashboard</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Admin</p>
            <p className="text-xs text-gray-600">Keluar</p>
          </div>
        </div>
      </div>
    </header>
  );
}
