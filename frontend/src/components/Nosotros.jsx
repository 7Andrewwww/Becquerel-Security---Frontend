import { useState } from "react";
import styles from "./Nosotros.module.css";
import fotoLida from "../assets/lida.jpg";
import fotoDavid from "../assets/david.jpg";
import { useTranslation } from "react-i18next";

const equipo = [
  {
    nombre: "David Leonardo Cañas Varón",
    foto: fotoDavid,
    descripcionKey: "davidDescripcion",
    tags: ["Física Médica", "I+D", "Protección Radiológica"],
    perfil: "Físico médico (M.Sc.) con experiencia en protección radiológica, medicina nuclear y docencia. Su formación es en Lic. en física, Esp. en bioingeniería y maestría en física médica. Desarrolla proyectos de I+D en tecnologías y procesos para entornos radiológicos, incluyendo soluciones de descontaminación y soporte a radiofarmacia. Además, se desempeña como consultor en aseguramiento de calidad y cumplimiento normativo.",
  },
  {
    nombre: "Lida Yulie Velásquez Sierra",
    foto: fotoLida,
    descripcionKey: "lidaDescripcion",
    tags: ["Radioterapia", "OPR", "Control de Calidad"],
    perfil: "Física Médica (M.Sc.) de la Pontificia Universidad Javeriana y Lic. en Física de la Universidad Distrital, con formación en protección radiológica y seguridad en radioterapia. Cuenta con experiencia en planeación de tratamientos en radioterapia, controles de calidad y braquiterapia. Se ha desempeñado como OPR. Su trabajo integra cumplimiento normativo, control de calidad y asesoría técnica en entornos clínicos.",
  },
];

function Nosotros() {
  const { t } = useTranslation();
  const [perfilAbierto, setPerfilAbierto] = useState(null);

  const abrirModal = (persona) => {
    setPerfilAbierto(persona);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setPerfilAbierto(null);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.page}>

      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.etiqueta}>Nuestra organización</div>
        <h1 className={styles.titulo}>{t("nosotrosTitulo")}</h1>
        <div className={styles.barra} />
        <p className={styles.subtitulo}>{t("nosotrosSubtitulo")}</p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className={styles.mvSection}>
        <div className={styles.mvCard}>
          <div className={styles.mvIcono}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <h2 className={styles.mvTitulo}>Misión</h2>
          <div className={styles.mvBarra} />
          <p className={styles.mvTexto}>
            Becquerel Security brinda servicios de seguridad y protección radiológica en el buen uso de radiación ionizante y no ionizante para la industria y el ámbito médico, ofreciendo productos y asesorías técnicas que garantizan el bienestar de nuestros colaboradores, con compromiso social y medioambiental.
          </p>
        </div>
        <div className={styles.mvCard}>
          <div className={styles.mvIcono}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className={styles.mvTitulo}>Visión</h2>
          <div className={styles.mvBarra} />
          <p className={styles.mvTexto}>
            Para el 2030 seremos la primera empresa colombiana en brindar un amplio portafolio de productos y servicios que permitirá satisfacer los requerimientos de cada uno de nuestros clientes, apoyando el cumplimiento de la normativa nacional y las recomendaciones internacionales en protección radiológica.
          </p>
        </div>
      </section>

      {/* EQUIPO */}
      <section className={styles.equipo}>

        {/* Subtítulo centrado */}
        <div className={styles.equipoHeader}>
          <div className={styles.equipoEtiqueta}>El equipo</div>
        </div>

        {equipo.map((persona, i) => (
          <div key={i} className={styles.card}>

            {/* FOTO */}
            <div className={styles.fotoWrapper}>
              {persona.foto ? (
                <div className={styles.fotoContenedor}>
                  <img src={persona.foto} alt={persona.nombre} className={styles.foto} />
                </div>
              ) : (
                <div className={styles.fotoPlaceholder}>
                  <span>📷</span>
                </div>
              )}
            </div>

            {/* INFO */}
            <div className={styles.info}>
              <h2 className={styles.nombre}>{persona.nombre}</h2>
              <div className={styles.tags}>
                {persona.tags.map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.descripcion}>{t(persona.descripcionKey)}</p>
              <button
                className={styles.perfilBtn}
                onClick={() => abrirModal(persona)}
              >
                Ver trayectoria profesional ↗
              </button>
            </div>

          </div>
        ))}
      </section>

      {/* MODAL */}
      {perfilAbierto && (
        <div className={styles.modalOverlay} onClick={cerrarModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCerrar} onClick={cerrarModal}>✕</button>
            <div className={styles.modalContenido}>
              <div className={styles.modalImagen}>
                {perfilAbierto.foto ? (
                  <img src={perfilAbierto.foto} alt={perfilAbierto.nombre} />
                ) : (
                  <div className={styles.fotoPlaceholder}><span>📷</span></div>
                )}
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.modalEtiqueta}>Perfil profesional</span>
                <h2 className={styles.modalNombre}>{perfilAbierto.nombre}</h2>
                <div className={styles.modalBarra} />
                <div className={styles.modalTags}>
                  {perfilAbierto.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <p className={styles.modalTexto}>{perfilAbierto.perfil}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Nosotros;