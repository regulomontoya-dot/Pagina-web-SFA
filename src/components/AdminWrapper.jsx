import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

const AdminWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://iestpsfa.edu.pe/backend/api/check_session.php", { withCredentials: true })
      //.get("http://localhost:8080/backend/api/check_session.php", { withCredentials: true })
      .then((res) => {
        setIsLoggedIn(res.data.logged_in);
      })
      .catch(() => setIsLoggedIn(false))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await axios.post("https://iestpsfa.edu.pe/backend/api/logout.php", {}, { withCredentials: true });
    //await axios.post("http://localhost:8080/backend/api/logout.php", {}, { withCredentials: true });
    
    setIsLoggedIn(false);
  };

  if (loading) return <p style={{ textAlign: "center" }}>Verificando sesión...</p>;

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Cerrar sesión
          </button>
          <AdminPanel />
        </>
      ) : (
        <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

const styles = {
  logoutBtn: {
    background: "#c62828",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
  },
};

export default AdminWrapper;
