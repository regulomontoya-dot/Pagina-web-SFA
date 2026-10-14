import React, { useState } from "react";
import axios from "axios";

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://iestpsfa.edu.pe/backend/api/login.php",
        //"http://localhost:8080/backend/api/login.php",
        { username, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        onLoginSuccess();
      } else {
        setMensaje("❌ Usuario o contraseña incorrectos.");
      }
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔐 Iniciar Sesión</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Ingresar
        </button>
      </form>
      {mensaje && <p style={styles.mensaje}>{mensaje}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "350px",
    margin: "100px auto",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#0078d4",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  mensaje: { marginTop: "10px", color: "red" },
};

export default AdminLogin;
