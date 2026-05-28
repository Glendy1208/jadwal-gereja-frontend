export default function Dashboard() {
  const stats = [
    {
      title: "Total Pelayan",
      value: "24",
      color: "bg-blue-500",
      icon: "👥",
    },
    {
      title: "Jadwal Minggu Ini",
      value: "8",
      color: "bg-green-500",
      icon: "📅",
    },
    {
      title: "Ibadah Aktif",
      value: "3",
      color: "bg-purple-500",
      icon: "⛪",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="font-medium text-gray-800">Jadwal baru ditambahkan</p>
              <p className="text-sm text-gray-600">Ibadah Pagi - Minggu, 1 Juni 2025</p>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">Baru</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="font-medium text-gray-800">Pelayan Tuhan diperbarui</p>
              <p className="text-sm text-gray-600">Data pelayan tuhan diubah oleh Admin</p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Update</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-800">Jadwal dipublikasikan</p>
              <p className="text-sm text-gray-600">Jadwal ibadah bulan Juni telah dipublikasikan</p>
            </div>
            <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Publish</span>
          </div>
        </div>
      </div>
    </div>
  );
}
