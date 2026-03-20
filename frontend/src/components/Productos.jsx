import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Productos.module.css";

const VISIBLE = 4;

function Productos({ productosData }) {
  const { t } = useTranslation();
  const [busqueda, setBusqueda] = useState("");
  const [indice, setIndice] = useState(0);
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

  const maxIndice = Math.max(0, filtrados.length - VISIBLE);
  const anterior = () => setIndice((i) => Math.max(0, i - 1));
  const siguiente = () => setIndice((i) => Math.min(maxIndice, i + 1));

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    setIndice(0);
  };

  const visibles = filtrados.slice(indice, indice + VISIBLE);

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
        <button
          className={`${styles.flecha} ${styles.flechaIzq}`}
          onClick={anterior}
          disabled={indice === 0}
        >
          &#8249;
        </button>

        <div className={styles.carrusel}>
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

        <button
          className={`${styles.flecha} ${styles.flechaDer}`}
          onClick={siguiente}
          disabled={indice >= maxIndice}
        >
          &#8250;
        </button>
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {Array.from({ length: maxIndice + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === indice ? styles.dotActivo : ""}`}
            onClick={() => setIndice(i)}
          />
        ))}
      </div>

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
            {/* Botón cerrar */}
            <button
              className={styles.modalCerrar}
              onClick={() => setProductoSeleccionado(null)}
            >
              ✕
            </button>

            <div className={styles.modalContenido}>
              {/* Imagen */}
              <div className={styles.modalImagen}>
                {productoSeleccionado.imagen ? (
                  <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>

              {/* Info */}
              <div className={styles.modalInfo}>
                <span className={styles.modalEtiqueta}>Producto</span>
                <h2 className={styles.modalTitulo}>{productoSeleccionado.nombre}</h2>
                <div className={styles.modalBarra} />
                <p className={styles.modalDescripcion}>{productoSeleccionado.descripcion}</p>
                <p className={styles.modalTexto}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className={styles.modalTexto}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
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