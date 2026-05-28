import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

// Import halaman-halaman admin
import Dashboard from "../pages/admin/Dashboard";
import PelayanTuhan from "../pages/admin/PelayanTuhan";
import JadwalIbadah from "../pages/admin/JadwalIbadah";
import DaftarPelayanan from "../pages/admin/DaftarPelayanan";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/pelayan-tuhan"
          element={
            <AdminLayout>
              <PelayanTuhan />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/jadwal-ibadah"
          element={
            <AdminLayout>
              <JadwalIbadah />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/daftar-pelayanan"
          element={
            <AdminLayout>
              <DaftarPelayanan />
            </AdminLayout>
          }
        />

        {/* Default redirect to dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}