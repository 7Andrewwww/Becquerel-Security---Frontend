import styles from "./IDSeguridad.module.css";
import heroBg from "../assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const areas = [
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    tituloKey: "area1Titulo",
    textoKey: "area1Texto",
    tag: "Laboratorio",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    tituloKey: "area2Titulo",
    textoKey: "area2Texto",
    tag: "Medicina Nuclear",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    tituloKey: "area3Titulo",
    textoKey: "area3Texto",
    tag: "Industria",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tituloKey: "area4Titulo",
    textoKey: "area4Texto",
    tag: "Defensa",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M2 20h20M4 20V10l8-7 8 7v10"/>
        <path d="M10 20v-5h4v5"/>
      </svg>
    ),
    tituloKey: "area5Titulo",
    textoKey: "area5Texto",
    tag: "Seguridad Radiológica",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    tituloKey: "area6Titulo",
    textoKey: "area6Texto",
    tag: "SST",
  },
  {
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    tituloKey: "area7Titulo",
    textoKey: "area7Texto",
    tag: "Innovación",
  },
];

function IDSeguridad() {
  const { t } = useTranslation();

  const heroTituloLinea1 = t("heroLinea1");
  const heroAcento = t("heroAcento");
  const heroLinea3 = t("heroLinea3");

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroContainer}
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className={styles.heroContent}>
         

            <h1 className={styles.heroTitulo}>
              {heroTituloLinea1}<br />
              <span className={styles.heroAcento}>{heroAcento}</span><br />
              {heroLinea3}
            </h1>

            <p className={styles.heroSubtitulo}>{t("heroSubtitulo")}</p>
          </div>
        </div>
      </section>

      {/* INTRO — dentro de un card como misión/visión */}
      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <div className={styles.introTexto}>
            <span className={styles.introEtiqueta}>Nuestra propuesta</span>
            <h2 className={styles.introTitulo}>¿Qué hacemos?</h2>
            <div className={styles.introBarra} />
            <p>{t("introParrafo1")}</p>
            <p>{t("introParrafo2")}</p>
          </div>
          <div className={styles.introDecor}>
            <div className={styles.introCircle}>
              <span>I+D</span>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className={styles.areas}>
        <div className={styles.areasHeader}>
          <div className={styles.areasEtiqueta}>Especialidades</div>
          <h2 className={styles.areasTitulo}>{t("areasTitulo")}</h2>
          <div className={styles.areasTituloBarra} />
          <p className={styles.areasSubtitulo}>{t("areasSubtitulo")}</p>
        </div>

        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {areas.map((area, i) => (
              <article key={i} className={styles.card}>
                <div className={styles.cardIconoWrapper}>
                  <div className={styles.cardIcono}>{area.icono}</div>
                </div>
                <span className={styles.cardTag}>{area.tag}</span>
                <h3 className={styles.cardTitulo}>{t(area.tituloKey)}</h3>
                <p className={styles.cardTexto}>{t(area.textoKey)}</p>
                <div className={styles.cardLinea} />
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitulo}>{t("ctaTitulo")}</h2>
              <p className={styles.ctaTexto}>{t("ctaTexto")}</p>
              <a
                href="https://wa.me/573196659252"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                {t("ctaBtn")} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default IDSeguridad;