import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";

// Parameter { children } adalah cara React menerima "isi halaman" dari luar
export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar di sebelah kiri */}
      <AdminSidebar />

      {/* Sisi Kanan (Header + Konten + Footer) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader />
        
        {/* Area Konten Utama yang bisa di-scroll */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children} 
        </main>
        
        <AdminFooter />
      </div>
    </div>
  );
}