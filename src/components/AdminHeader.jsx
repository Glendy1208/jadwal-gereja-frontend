export default function AdminHeader() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">
        Panel Admin
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">Halo, Admin</span>
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}