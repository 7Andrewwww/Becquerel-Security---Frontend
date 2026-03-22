import styles from "./Contacto.module.css";
import fondo3 from "../assets/fondo3.png";
import { useTranslation } from "react-i18next";

/* ─── Íconos SVG ─── */
const IconoCorreo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const IconoWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const IconoContacto = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.36 5.36l.95-.95a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconoRedes = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);

const IconoFlechaAfuera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);

const IconoFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconoInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const IconoLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconoX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <path d="M4 4l16 16M20 4L4 20"/>
  </svg>
);

function Contacto() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroContainer}
          style={{ backgroundImage: `url(${fondo3})` }}
        >
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitulo}>{t("contactoTitulo")}</h1>
            <p className={styles.heroSubtitulo}>{t("contactoDescripcion")}</p>
          </div>
        </div>
      </section>

      {/* CONTENIDO — dos cards */}
      <div className={styles.contenido}>

        {/* CARD 1 — Contacto directo */}
        <div className={styles.card}>
          <div className={styles.cardStripe} />
          <div className={styles.cardInner}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconoHeader}><IconoContacto /></div>
              <h2 className={styles.cardTitulo}>{t("contactoDirecto")}</h2>
            </div>
            <div className={styles.contactoLista}>
              <a href="https://mail.google.com/mail/?view=cm&to=becquesecsas@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
                <div className={styles.contactoIcono}><IconoCorreo /></div>
                <div className={styles.contactoInfo}>
                  <span className={styles.contactoLabel}>{t("correo")}</span>
                  <span className={styles.contactoValor}>becquesecsas@gmail.com</span>
                </div>
                <span className={styles.contactoFlecha}><IconoFlechaAfuera /></span>
              </a>
              <a
                href="https://wa.me/573196659252"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactoItem}
              >
                <div className={styles.contactoIcono}><IconoWhatsapp /></div>
                <div className={styles.contactoInfo}>
                  <span className={styles.contactoLabel}>{t("whatsapp")}</span>
                  <span className={styles.contactoValor}>+57 319 6659252</span>
                </div>
                <span className={styles.contactoFlecha}><IconoFlechaAfuera /></span>
              </a>
            </div>
          </div>
        </div>

        {/* CARD 2 — Redes sociales */}
        <div className={styles.card}>
          <div className={styles.cardStripe} />
          <div className={styles.cardInner}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconoHeader}><IconoRedes /></div>
              <h2 className={styles.cardTitulo}>{t("siguenos")}</h2>
            </div>
            <p className={styles.redesSubtitulo}>{t("redesDescripcion")}</p>
            <div className={styles.redesGrid}>

              <a
                href="https://www.facebook.com/profile.php?id=61585789613924"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.redItem} ${styles.facebook}`}
              >
                <div className={styles.redIcono}><IconoFacebook /></div>
                <div className={styles.redTexto}>
                  <span className={styles.redNombre}>Facebook</span>
                  <span className={styles.redHandle}>Becquerel Security</span>
                </div>
                <span className={styles.redFlecha}><IconoFlechaAfuera /></span>
              </a>

              <a
                href="https://www.instagram.com/becquerelsegurity/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.redItem} ${styles.instagram}`}
              >
                <div className={styles.redIcono}><IconoInstagram /></div>
                <div className={styles.redTexto}>
                  <span className={styles.redNombre}>Instagram</span>
                  <span className={styles.redHandle}>@becquerelsegurity</span>
                </div>
                <span className={styles.redFlecha}><IconoFlechaAfuera /></span>
              </a>

              <a
                href="https://www.linkedin.com/in/becquerel-security-b146163b4/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.redItem} ${styles.linkedin}`}
              >
                <div className={styles.redIcono}><IconoLinkedin /></div>
                <div className={styles.redTexto}>
                  <span className={styles.redNombre}>LinkedIn</span>
                  <span className={styles.redHandle}>Becquerel Security</span>
                </div>
                <span className={styles.redFlecha}><IconoFlechaAfuera /></span>
              </a>

              <a
                href="https://x.com/BecquerelSecu"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.redItem} ${styles.x}`}
              >
                <div className={styles.redIcono}><IconoX /></div>
                <div className={styles.redTexto}>
                  <span className={styles.redNombre}>X</span>
                  <span className={styles.redHandle}>@BecquerelSecu</span>
                </div>
                <span className={styles.redFlecha}><IconoFlechaAfuera /></span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;