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
    numero: "01",
  },
  {
    nombre: "Lida Yulie Velásquez Sierra",
    foto: fotoLida,
    descripcionKey: "lidaDescripcion",
    tags: ["Radioterapia", "OPR", "Control de Calidad"],
    numero: "02",
  },
];

function Nosotros() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>

      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.etiqueta}>El equipo</div>
        <h1 className={styles.titulo}>{t("nosotrosTitulo")}</h1>
        <div className={styles.barra} />
        <p className={styles.subtitulo}>{t("nosotrosSubtitulo")}</p>
      </section>

      {/* EQUIPO */}
      <section className={styles.equipo}>
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
              <div className={styles.numeroDecor}>{persona.numero}</div>
              <h2 className={styles.nombre}>{persona.nombre}</h2>
              <div className={styles.tags}>
                {persona.tags.map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.descripcion}>{t(persona.descripcionKey)}</p>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

export default Nosotros;