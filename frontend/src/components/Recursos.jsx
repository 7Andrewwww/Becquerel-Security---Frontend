import { useState } from "react";
import styles from "./Recursos.module.css";
import recurso1 from "../assets/recurso1.png";
import recurso2 from "../assets/recurso2.png";
import recurso3 from "../assets/recurso3.png";
import recurso4 from "../assets/recurso4.png";
import recurso5 from "../assets/recurso5.png";
import { useTranslation } from "react-i18next";

const recursosData = [
  {
    id: 1,
    nombre: "Protección Radiológica Ocupacional",
    descripcion: "Guía de Seguridad General Nº GSG-7. Normas de seguridad del OIEA para la protección de las personas y el medio ambiente.",
    archivo: "https://www-pub.iaea.org/MTCD/Publications/PDF/P1785S_web.pdf",
    imagen: recurso1,
  },
  {
    id: 2,
    nombre: "Preparación y Respuesta para Emergencia Nuclear o Radiológica",
    descripcion: "Requisitos de Seguridad Generales Nº GSR Part 7. Normas de seguridad del OIEA.",
    archivo: "https://www-pub.iaea.org/MTCD/Publications/PDF/P1708S_web.pdf",
    imagen: recurso2,
  },
  {
    id: 3,
    nombre: "Resolución 18 1434 de 2002",
    descripcion: "Reglamento de Protección y Seguridad Radiológica. Ministerio de Minas y Energía de Colombia.",
    archivo: "https://www.minenergia.gov.co/documents/7512/20914-1695.pdf",
    imagen: recurso3,
  },
  {
    id: 4,
    nombre: "Resolución 18 0005 de 2010",
    descripcion: "Reglamento para la gestión de los desechos radiactivos en Colombia. Ministerio de Minas y Energía.",
    archivo: "https://www.minenergia.gov.co/documents/7518/RES180005_2010.pdf",
    imagen: recurso4,
  },
  {
    id: 5,
    nombre: "Resolución 1811 de 2025",
    descripcion: "Reglamenta el uso de equipos generadores de radiación ionizante y la prestación de servicios de protección radiológica.",
    archivo: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1811-de-2025.pdf",
    imagen: recurso5,
  },
];

const VISIBLE = 4;

function Recursos() {
  const { t } = useTranslation();
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [direccion, setDireccion] = useState("derecha");

  const filtrados = recursosData.filter((r) =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase())
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
    <section className={styles.section}>

      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.etiqueta}>Documentación</div>
        <h1 className={styles.titulo}>{t("recursosTitulo", "Recursos y Descargas")}</h1>
        <div className={styles.barra} />
        <p className={styles.subtitulo}>
          {t("recursosDescripcion", "Documentación técnica, fichas de seguridad y materiales de apoyo disponibles para descarga.")}
        </p>
      </div>

      {/* BUSCADOR */}
      <div className={styles.buscadorWrapper}>
        <div className={styles.buscadorInner}>
          <span className={styles.buscadorIcono}>🔍</span>
          <input
            className={styles.buscador}
            type="text"
            placeholder={t("buscar", "Buscar")}
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
          {visibles.map((recurso) => (
            <div key={recurso.id} className={styles.card}>
              <div className={styles.cardImagen}>
                <img src={recurso.imagen} alt={recurso.nombre} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardNombre}>{recurso.nombre}</h3>
                <p className={styles.cardDescripcion}>{recurso.descripcion}</p>
                <button
                  className={styles.cardBtn}
                  onClick={() => recurso.archivo && window.open(recurso.archivo, "_blank")}
                  disabled={!recurso.archivo}
                >
                  {t("descargar", "⬇ Descargar")}
                </button>
              </div>
            </div>
          ))}
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

    </section>
  );
}

export default Recursos;