export default function JadwalIbadah() {
  const jadwalList = [
    {
      id: 1,
      namaIbadah: "Ibadah Pagi",
      hari: "Minggu",
      jam: "09:00",
      tempat: "Gereja Pusat",
      pemimpin: "Budi Santoso",
      status: "Aktif",
    },
    {
      id: 2,
      namaIbadah: "Ibadah Sore",
      hari: "Minggu",
      jam: "17:00",
      tempat: "Gereja Pusat",
      pemimpin: "Siti Nurhaliza",
      status: "Aktif",
    },
    {
      id: 3,
      namaIbadah: "Doa Pagi",
      hari: "Senin - Jumat",
      jam: "06:00",
      tempat: "Ruang Doa",
      pemimpin: "Rina Merdeka",
      status: "Aktif",
    },
    {
      id: 4,
      namaIbadah: "Ibadah Pemuda",
      hari: "Jumat",
      jam: "19:00",
      tempat: "Gereja Cabang",
      pemimpin: "Ahmad Wijaya",
      status: "Tidak Aktif",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Jadwal Ibadah</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          + Tambah Jadwal
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nama Ibadah</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Hari</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Jam</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Tempat</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Pemimpin</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jadwalList.map((jadwal) => (
              <tr key={jadwal.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-800">{jadwal.namaIbadah}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{jadwal.hari}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{jadwal.jam}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{jadwal.tempat}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{jadwal.pemimpin}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      jadwal.status === "Aktif"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {jadwal.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                  <button className="text-red-600 hover:text-red-800 font-medium">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
