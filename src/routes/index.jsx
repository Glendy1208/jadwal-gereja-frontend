import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

// Import halaman-halaman dari folder pages
import Home from "../pages/admin/Home";
import PelayanTuhan from "../pages/admin/PelayanTuhan";
import JadwalIbadah from "../pages/admin/JadwalIbadah";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Default */}
        <Route path="/" element={<Navigate to="/admin/home" replace />} />

        {/* Grup Rute Admin */}
        <Route 
          path="/admin/home" 
          element={<AdminLayout><Home /></AdminLayout>} 
        />
        <Route 
          path="/admin/pelayan-tuhan" 
          element={<AdminLayout><PelayanTuhan /></AdminLayout>} 
        />
        <Route 
          path="/admin/jadwal-ibadah" 
          element={<AdminLayout><JadwalIbadah /></AdminLayout>} 
        />
      </Routes>
    </BrowserRouter>
  );
}