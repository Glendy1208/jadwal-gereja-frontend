export default function PelayanTuhan() {
  const pelayanList = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pendeta",
      email: "budi@gereja.com",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Penyanyi",
      email: "siti@gereja.com",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      role: "Organis",
      email: "ahmad@gereja.com",
      status: "Aktif",
    },
    {
      id: 4,
      name: "Rina Merdeka",
      role: "Pemandu Doa",
      email: "rina@gereja.com",
      status: "Tidak Aktif",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Pelayan Tuhan</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          + Tambah Pelayan
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Peran</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pelayanList.map((pelayan) => (
              <tr key={pelayan.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-800">{pelayan.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pelayan.role}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pelayan.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pelayan.status === "Aktif"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {pelayan.status}
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
