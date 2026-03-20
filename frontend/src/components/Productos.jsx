import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Productos.module.css";

const VISIBLE = 4;

function Productos({ productosData }) {
  const { t } = useTranslation();
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [direccion, setDireccion] = useState("derecha");
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    if (productosData) {
      setProductos(productosData);
    } else {
      setProductos([]);
    }
  }, [productosData]);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (productoSeleccionado) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [productoSeleccionado]);

  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(filtrados.length / VISIBLE);

  const irAPagina = (nuevaP, dir = "derecha") => {
    if (nuevaP === pagina || animando) return;
    setDireccion(dir);
    setAnimando(true);
    setTimeout(() => {
      setPagina(nuevaP);
      setAnimando(false);
    }, 220);
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPagina(0);
  };

  const visibles = filtrados.slice(pagina * VISIBLE, pagina * VISIBLE + VISIBLE);

  return (
    <section id="productos" className={styles.section}>

      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.etiqueta}>Catálogo</div>
        <h1 className={styles.titulo}>{t("productosTitulo")}</h1>
        <div className={styles.barra} />
        <p className={styles.subtitulo}>{t("productosDescripcion")}</p>
      </div>

      {/* BUSCADOR */}
      <div className={styles.buscadorWrapper}>
        <div className={styles.buscadorInner}>
          <span className={styles.buscadorIcono}>🔍</span>
          <input
            className={styles.buscador}
            type="text"
            placeholder={t("buscar")}
            value={busqueda}
            onChange={handleBusqueda}
          />
        </div>
      </div>

      {/* CARRUSEL */}
      <div className={styles.carruselWrapper}>
        <div
          className={`${styles.carrusel} ${animando
            ? (direccion === "derecha" ? styles.salirIzq : styles.salirDer)
            : styles.entrar}`}
        >
          {visibles.length > 0 ? (
            visibles.map((producto) => (
              <div key={producto.id} className={styles.card}>
                <div className={styles.cardImagen}>
                  {producto.imagen ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <div className={styles.placeholder} />
                  )}
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardNombre}>{producto.nombre}</h3>
                  <p className={styles.cardDescripcion}>{producto.descripcion}</p>
                  <button
                    className={styles.cardBtn}
                    onClick={() => setProductoSeleccionado(producto)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>{t("noProductos") || "No hay productos disponibles aún."}</p>
          )}
        </div>
      </div>

      {/* PAGINACIÓN */}
      {totalPaginas > 1 && (
        <div className={styles.paginacion}>
          <button
            className={styles.paginaBtn}
            onClick={() => irAPagina(pagina - 1, "izquierda")}
            disabled={pagina === 0}
          >
            ←
          </button>
          <div className={styles.paginas}>
            {Array.from({ length: totalPaginas }).map((_, i) => (
              <button
                key={i}
                className={`${styles.pagina} ${i === pagina ? styles.paginaActiva : ""}`}
                onClick={() => irAPagina(i, i > pagina ? "derecha" : "izquierda")}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            className={styles.paginaBtn}
            onClick={() => irAPagina(pagina + 1, "derecha")}
            disabled={pagina >= totalPaginas - 1}
          >
            →
          </button>
        </div>
      )}

      {/* MODAL */}
      {productoSeleccionado && (
        <div
          className={styles.modalOverlay}
          onClick={() => setProductoSeleccionado(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCerrar}
              onClick={() => setProductoSeleccionado(null)}
            >
              ✕
            </button>

            <div className={styles.modalContenido}>
              <div className={styles.modalImagen}>
                {productoSeleccionado.imagen ? (
                  <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>

              <div className={styles.modalInfo}>
                <span className={styles.modalEtiqueta}>Producto</span>
                <h2 className={styles.modalTitulo}>{productoSeleccionado.nombre}</h2>
                <div className={styles.modalBarra} />
                <p className={styles.modalDescripcion}>{productoSeleccionado.descripcion}</p>
                <a
                  className={styles.modalBtn}
                  href="https://wa.me/573196659252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar información ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Productos;