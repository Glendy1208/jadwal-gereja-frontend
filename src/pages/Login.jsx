import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validasi input
      if (!username || !password) {
        setError("Username dan password harus diisi");
        setLoading(false);
        return;
      }

      // Simulasi login berhasil (hapus ini setelah API siap)
      console.log("Login dengan username:", username);
      localStorage.setItem("token", "dummy_token");
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Terjadi kesalahan saat login: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Jadwal Gereja</h1>
          <p>Sistem Manajemen Jadwal Pelayanan</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Sedang login..." : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <p>© 2026 Jadwal Gereja. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
