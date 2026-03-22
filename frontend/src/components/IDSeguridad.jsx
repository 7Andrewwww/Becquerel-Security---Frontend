import { useState } from "react";
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
    emoji: "🧪",
    modalContenido: [
      "Desarrollo de formulaciones químicas, jabones especializados y soluciones descontaminantes destinadas a la eliminación de contaminación en manos, superficies, equipos e instrumental utilizados en entornos médicos, industriales y de investigación.",
      "Estos desarrollos están orientados a entornos donde se manipulan radionúclidos, sustancias químicas peligrosas o materiales contaminantes, como servicios de medicina nuclear, radiofarmacia, laboratorios, industria química, industria energética y centros de investigación.",
    ],
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
    emoji: "⚛️",
    modalContenido: [
      "Desarrollo de productos y protocolos destinados al control de contaminación en radiofarmacias hospitalarias, servicios de medicina nuclear y laboratorios de investigación, contribuyendo a la manipulación segura de radiofármacos y radionúclidos utilizados en diagnóstico y terapia.",
      "Estas soluciones incluyen procedimientos para descontaminación de superficies, descontaminación de manos y piel, manejo de derrames radiológicos y control de contaminación en áreas críticas.",
    ],
    modalLista: [
      "Descontaminación de superficies",
      "Descontaminación de manos y piel",
      "Manejo de derrames radiológicos",
      "Control de contaminación en áreas críticas",
    ],
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
    emoji: "🏭",
    modalContenido: [
      "Investigación y desarrollo de soluciones destinadas a instalaciones industriales donde existen riesgos radiológicos, químicos o físicos, incluyendo industrias petroleras, mineras, energéticas, químicas y manufactureras.",
    ],
    modalLista: [
      "Prevención de contaminación",
      "Limpieza técnica especializada",
      "Gestión segura de materiales peligrosos",
      "Control de riesgos asociados a procesos industriales complejos",
    ],
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
    emoji: "🛡",
    modalContenido: [
      "Becquerel Security también orienta parte de sus desarrollos hacia entornos de seguridad institucional y militar, donde es necesario garantizar procedimientos adecuados de control de contaminación, descontaminación de superficies y manejo seguro de materiales potencialmente peligrosos.",
      "Estas aplicaciones pueden incluir el apoyo técnico en protocolos de descontaminación, manejo de incidentes con materiales peligrosos y fortalecimiento de programas de seguridad radiológica o química.",
    ],
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
    emoji: "👷",
    modalContenido: [
      "Todas las soluciones desarrolladas por Becquerel Security se fundamentan en las recomendaciones internacionales de protección radiológica y seguridad ocupacional, orientados a minimizar o contener los riesgos asociados al uso de radiación y sustancias peligrosas.",
    ],
    modalLista: [
      "Protección del personal ocupacionalmente expuesto",
      "Reducción del riesgo de contaminación radiactiva o química",
      "Fortalecimiento de los programas de protección radiológica",
      "Seguridad en entornos clínicos, industriales y tecnológicos",
      "Protección y seguridad radiológica del medio ambiente",
      "Cumplimiento de la normativa nacional e internacional aplicable",
    ],
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
    emoji: "👷",
    modalContenido: [
      "El desarrollo de soluciones tecnológicas y metodologías de Becquerel Security también se articula con los principios de Seguridad y Salud en el Trabajo (SST), orientados a la prevención y control de riesgos laborales.",
      "Estas herramientas pueden aplicarse en organizaciones del sector médico, industrial, energético, minero, militar y tecnológico.",
    ],
    modalLista: [
      "Identificación y control de riesgos físicos, químicos y radiológicos",
      "Fortalecimiento de programas de prevención y seguridad industrial",
      "Desarrollo de protocolos de higiene ocupacional",
      "Capacitación y cultura de seguridad organizacional",
      "Aplicación de baterías de riesgo psicosocial",
      "Asesorías y apoyo legal",
    ],
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
    emoji: "⚡",
    modalContenido: [
      "Becquerel Security promueve una cultura de innovación científica y desarrollo tecnológico, orientada a generar soluciones que respondan a las necesidades de las organizaciones que trabajan con radiación, sustancias peligrosas o procesos industriales complejos.",
    ],
    modalLista: [
      "Investigación aplicada",
      "Transferencia tecnológica",
      "Desarrollo experimental",
      "Mejora continua de procesos",
    ],
  },
];

function IDSeguridad() {
  const { t } = useTranslation();
  const [areaAbierta, setAreaAbierta] = useState(null);

  const abrirModal = (area) => {
    setAreaAbierta(area);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setAreaAbierta(null);
    document.body.style.overflow = "";
  };

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

      {/* INTRO */}
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
              <article
                key={i}
                className={styles.card}
                onClick={() => abrirModal(area)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && abrirModal(area)}
              >
                <div className={styles.cardIconoWrapper}>
                  <div className={styles.cardIcono}>{area.icono}</div>
                </div>
                <span className={styles.cardTag}>{area.tag}</span>
                <h3 className={styles.cardTitulo}>{t(area.tituloKey)}</h3>
                <p className={styles.cardTexto}>{t(area.textoKey)}</p>
                <div className={styles.cardLinea} />
                <span className={styles.cardVerMas}>Ver más →</span>
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

      {/* MODAL */}
      {areaAbierta && (
        <div className={styles.modalOverlay} onClick={cerrarModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCerrar} onClick={cerrarModal}>✕</button>
            <div className={styles.modalContenido}>
              <div className={styles.modalHeader}>
                <div className={styles.modalIconoWrapper}>
                  <div className={styles.modalIcono}>{areaAbierta.icono}</div>
                </div>
                <div>
                  <span className={styles.modalEtiqueta}>{areaAbierta.tag}</span>
                  <h2 className={styles.modalTitulo}>{t(areaAbierta.tituloKey)}</h2>
                  <div className={styles.modalBarra} />
                </div>
              </div>
              <div className={styles.modalCuerpo}>
                {areaAbierta.modalContenido.map((parrafo, i) => (
                  <p key={i} className={styles.modalTexto}>{parrafo}</p>
                ))}
                {areaAbierta.modalLista && (
                  <ul className={styles.modalLista}>
                    {areaAbierta.modalLista.map((item, i) => (
                      <li key={i} className={styles.modalListaItem}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default IDSeguridad;