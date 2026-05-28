export default function DaftarPelayanan() {
  const pelayananList = [
    {
      id: 1,
      namaPelayanan: "Organis",
      deskripsi: "Memainkan organ dalam ibadah",
      kategori: "Musik",
      status: "Aktif",
    },
    {
      id: 2,
      namaPelayanan: "Penyanyi",
      deskripsi: "Bernyanyi dalam ibadah",
      kategori: "Musik",
      status: "Aktif",
    },
    {
      id: 3,
      namaPelayanan: "Pemandu Doa",
      deskripsi: "Memimpin doa dalam ibadah",
      kategori: "Spiritual",
      status: "Aktif",
    },
    {
      id: 4,
      namaPelayanan: "Petugas Kebersihan",
      deskripsi: "Menjaga kebersihan gereja",
      kategori: "Fasilitas",
      status: "Aktif",
    },
    {
      id: 5,
      namaPelayanan: "Usher",
      deskripsi: "Memandu jemaat masuk gereja",
      kategori: "Tamu",
      status: "Aktif",
    },
    {
      id: 6,
      namaPelayanan: "Sound System",
      deskripsi: "Mengatur sistem suara",
      kategori: "Teknis",
      status: "Tidak Aktif",
    },
  ];

  const getCategoryColor = (kategori) => {
    const colors = {
      Musik: "bg-purple-100 text-purple-800",
      Spiritual: "bg-green-100 text-green-800",
      Fasilitas: "bg-yellow-100 text-yellow-800",
      Tamu: "bg-blue-100 text-blue-800",
      Teknis: "bg-red-100 text-red-800",
    };
    return colors[kategori] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Daftar Pelayanan</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          + Tambah Pelayanan
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nama Pelayanan</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Deskripsi</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Kategori</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pelayananList.map((pelayanan) => (
              <tr key={pelayanan.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{pelayanan.namaPelayanan}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pelayanan.deskripsi}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(pelayanan.kategori)}`}>
                    {pelayanan.kategori}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pelayanan.status === "Aktif"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {pelayanan.status}
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
