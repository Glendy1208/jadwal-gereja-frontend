import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminFooter from "../components/admin/AdminFooter";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
}
