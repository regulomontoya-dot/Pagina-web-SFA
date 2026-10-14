import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const [bannerFile, setBannerFile] = useState(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfTitulo, setPdfTitulo] = useState("");
  const [pdfDescripcion, setPdfDescripcion] = useState("");

 
const [msgBanner, setMsgBanner] = useState("");
const [msgPdf, setMsgPdf] = useState("");
const [msgEdit, setMsgEdit] = useState("");


const [editData, setEditData] = useState(null);
const [editTitulo, setEditTitulo] = useState("");
const [editDescripcion, setEditDescripcion] = useState("");

const [publicidadFile, setPublicidadFile] = useState(null);
const [msgPublicidad, setMsgPublicidad] = useState("");





  const [comunicados, setComunicados] = useState([]);

  const API_URL = "https://iestpsfa.edu.pe/backend/api/";
  //const API_URL = "http://localhost:8080/backend/api/";

 
  useEffect(() => {
    cargarComunicados();
  }, []); 

  const cargarComunicados = async () => {
    try {
      const res = await axios.get(`${API_URL}get_comunicados.php`);
      setComunicados(res.data || []);
    } catch (error) {
      console.error("Error cargando comunicados:", error);
    }
  };


  const handleBannerUpload = async (e) => {
    e.preventDefault();
    if (!bannerFile) return setMensaje("Selecciona una imagen para el banner.");

    const formData = new FormData();
    formData.append("banner", bannerFile);

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}upload_banner.php`, formData);

      if (res.data.success) {
        setMsgBanner("✅ Banner actualizado correctamente.");

      } else {
        setMensaje("❌ " + res.data.error);
      }
    } catch {
      setMensaje("❌ Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };


  const handlePdfUpload = async (e) => {
    e.preventDefault();

    if (!pdfFile || !pdfTitulo.trim())
      return setMensaje("Completa el título y selecciona un PDF.");

    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("titulo", pdfTitulo);
    formData.append("descripcion", pdfDescripcion);


    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}upload_pdf.php`, formData);

      if (res.data.success) {
        setMsgPdf("✅ PDF subido correctamente.");

        setPdfFile(null);
        setPdfTitulo("");
        cargarComunicados();
      } else {
        setMensaje("❌ " + res.data.error);
      }
    } catch {
      setMensaje("❌ Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };


  const eliminarComunicado = async (index) => {
    if (!window.confirm("¿Seguro de eliminar este comunicado?")) return;

    const comunicado = comunicados[index];

    try {
      const res = await axios.post(`${API_URL}delete_comunicado.php`, {
        id: comunicado.id,
      });

      if (res.data.success) {
        setMensaje("🗑 Comunicado eliminado correctamente.");
        cargarComunicados();
      } else {
        setMensaje("❌ " + res.data.error);
      }
    } catch {
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  

 const abrirEdicion = (com) => {
  setEditData(com);
  setEditTitulo(com.titulo);
  setEditDescripcion(com.descripcion);
};

const guardarEdicion = async () => {
  try {
    const res = await axios.post(`${API_URL}edit_comunicado.php`, {
      id: editData.id,
      titulo: editTitulo,
      descripcion: editDescripcion
    });

    if (res.data.success) {
      setMsgEdit("Cambios guardados correctamente ✔");

      setEditData(null);
      cargarComunicados();
    } else {
      setMsgEdit("Error: " + res.data.error);
    }
  } catch {
    setMsgEdit("❌ Error al conectar con el servidor");
  }
};


const handlePublicidadUpload = async (e) => {
  e.preventDefault();

  if (!publicidadFile)
    return setMsgPublicidad("Selecciona una imagen para la publicidad.");

  const formData = new FormData();
  formData.append("publicidad", publicidadFile);

  try {
    setLoading(true);
    const res = await axios.post(`${API_URL}upload_publicidad.php`, formData);

    if (res.data.success) {
      setMsgPublicidad("✅ Publicidad actualizada correctamente.");
      setPublicidadFile(null);
    } else {
      setMsgPublicidad("❌ " + res.data.error);
    }
  } catch {
    setMsgPublicidad("❌ Error al conectar con el servidor.");
  } finally {
    setLoading(false);
  }
};




    return (
  <div className="admin-container">

    <h1 className="admin-title">⚙ Panel de Administración</h1>

    <div className="admin-grid-3">


      <div className="admin-card">
        <h2>📸 Actualizar Banner</h2>

        {msgBanner && <div className="alert success">{msgBanner}</div>}

        <form onSubmit={handleBannerUpload} className="admin-form">
          <label>Selecciona una imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBannerFile(e.target.files[0])}
          />

          <button className="btn-primary" disabled={loading}>
            {loading ? "Subiendo..." : "Subir Banner"}
          </button>
        </form>
      </div>

 
      <div className="admin-card">
        <h2>📄 Subir Comunicado</h2>

        {msgPdf && <div className="alert success">{msgPdf}</div>}

        <form onSubmit={handlePdfUpload} className="admin-form">
          <label>Título:</label>
          <input
            type="text"
            value={pdfTitulo}
            onChange={(e) => setPdfTitulo(e.target.value)}
            placeholder="Ej: Resultados Finales 2025"
          />

          <label>Descripción:</label>
          <textarea
            value={pdfDescripcion}
            onChange={(e) => setPdfDescripcion(e.target.value)}
            placeholder="Descripción del comunicado"
            rows="3"
          />

          <label>PDF:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />

          <button className="btn-primary" disabled={loading}>
            {loading ? "Subiendo..." : "Subir PDF"}
          </button>
        </form>
      </div>

       <div className="admin-card">
        <h2>📢 Actualizar Publicidad (Modal)</h2>

        {msgPublicidad && <div className="alert success">{msgPublicidad}</div>}

        <form
          onSubmit={handlePublicidadUpload}
          className="admin-form"
        >
          <label>Selecciona la imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPublicidadFile(e.target.files[0])}
          />

          <button className="btn-primary" disabled={loading}>
            {loading ? "Subiendo..." : "Subir Publicidad"}
          </button>
        </form>
      </div>

      <div className="admin-card full-width">
        <h2>📑 Comunicados Subidos</h2>

        {msgEdit && <div className="alert success">{msgEdit}</div>}

        {comunicados.length === 0 ? (
          <p>No hay comunicados aún.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>PDF</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {comunicados.map((c, i) => (
                <tr key={c.id}>
                  <td>{i + 1}</td>
                  <td>{c.titulo}</td>

                  <td>
                    <a href={c.pdf} target="_blank" rel="noreferrer">
                      Ver
                    </a>
                  </td>

                  <td className="acciones-td">
                    <button className="btn-warning" onClick={() => abrirEdicion(c)}>
                      ✏ Editar
                    </button>

                    <button className="btn-danger" onClick={() => eliminarComunicado(i)}>
                      🗑 Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

           


    </div>


    {editData && (
      <div className="modal-overlay" onClick={() => setEditData(null)}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <h2>✏ Editar Comunicado</h2>

          <label>Título:</label>
          <input
            type="text"
            value={editTitulo}
            onChange={(e) => setEditTitulo(e.target.value)}
          />

          <label>Descripción:</label>
          <textarea
            rows="3"
            value={editDescripcion}
            onChange={(e) => setEditDescripcion(e.target.value)}
          />

          <div className="modal-buttons">
            <button className="btn-primary" onClick={guardarEdicion}>
              Guardar Cambios
            </button>
            <button className="btn-cancel" onClick={() => setEditData(null)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )}

  </div>
);

};

export default AdminPanel;
