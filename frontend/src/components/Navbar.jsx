import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

/* ─── Banderas SVG inline — universalmente compatibles ─── */
const FlagCO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13" className={styles.langFlag}>
    <rect width="18" height="13" fill="#FCD116"/>
    <rect y="6.5" width="18" height="3.25" fill="#003893"/>
    <rect y="9.75" width="18" height="3.25" fill="#CE1126"/>
  </svg>
);

const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13" className={styles.langFlag}>
    <rect width="18" height="13" fill="#B22234"/>
    <rect y="1" width="18" height="1" fill="#fff"/>
    <rect y="3" width="18" height="1" fill="#fff"/>
    <rect y="5" width="18" height="1" fill="#fff"/>
    <rect y="7" width="18" height="1" fill="#fff"/>
    <rect y="9" width="18" height="1" fill="#fff"/>
    <rect y="11" width="18" height="1" fill="#fff"/>
    <rect width="7" height="7" fill="#3C3B6E"/>
  </svg>
);

const FlagBR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13" className={styles.langFlag}>
    <rect width="18" height="13" fill="#009C3B"/>
    <polygon points="9,1.5 17,6.5 9,11.5 1,6.5" fill="#FEDF00"/>
    <circle cx="9" cy="6.5" r="2.5" fill="#002776"/>
  </svg>
);

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuAbierto(false);
  };

  const currentLang = i18n.language;

  const idiomas = [
    { code: "es", Flag: FlagCO, label: "ES" },
    { code: "en", Flag: FlagUS, label: "EN" },
    { code: "pt", Flag: FlagBR, label: "PT" },
  ];

  const cerrarMenu = () => setMenuAbierto(false);

  const irAlInicio = (e) => {
    e.preventDefault();
    cerrarMenu();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const irAProductos = (e) => {
    e.preventDefault();
    cerrarMenu();
    if (window.location.pathname === "/") {
      const el = document.getElementById("productos");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("productos");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>

        {/* LOGO */}
        <div className={styles.logo}>
          <a href="/" onClick={irAlInicio} style={{ cursor: "pointer" }}>
            <img src={logo} alt="Becquerel Security" />
          </a>
        </div>

        {/* MENÚ DESKTOP */}
        <div className={styles.menu}>
          <a href="/" onClick={irAlInicio}>{t("inicio")}</a>
          <a href="#productos" onClick={irAProductos}>{t("productos")}</a>
          <Link to="/idseguridad">{t("seguridad")}</Link>
          <Link to="/nosotros">{t("nosotros")}</Link>
          <Link to="/contacto">{t("contacto")}</Link>
        </div>

        {/* SECCIÓN DERECHA DESKTOP */}
        <div className={styles.rightSection}>
          <div className={styles.languageSwitcher}>
            {idiomas.map(({ code, Flag, label }) => (
              <button
                key={code}
                className={`${styles.langBtn} ${currentLang === code ? styles.activeLang : ""}`}
                onClick={() => changeLanguage(code)}
                title={code.toUpperCase()}
              >
                <Flag />
                <span className={styles.langLabel}>{label}</span>
              </button>
            ))}
          </div>

          <a
            className={styles.btnCotizar}
            href="https://wa.me/573196659252"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cotizar")} ↗
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${menuAbierto ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

      {/* MENÚ MÓVIL */}
      <div className={`${styles.mobileMenu} ${menuAbierto ? styles.mobileMenuOpen : ""}`}>
        <a href="/" onClick={irAlInicio}>{t("inicio")}</a>
        <a href="#productos" onClick={irAProductos}>{t("productos")}</a>
        <Link to="/idseguridad" onClick={cerrarMenu}>{t("seguridad")}</Link>
        <Link to="/nosotros" onClick={cerrarMenu}>{t("nosotros")}</Link>
        <Link to="/contacto" onClick={cerrarMenu}>{t("contacto")}</Link>

        <div className={styles.mobileBottom}>
          <div className={styles.languageSwitcher}>
            {idiomas.map(({ code, Flag, label }) => (
              <button
                key={code}
                className={`${styles.langBtn} ${currentLang === code ? styles.activeLang : ""}`}
                onClick={() => changeLanguage(code)}
              >
                <Flag />
                <span className={styles.langLabel}>{label}</span>
              </button>
            ))}
          </div>
          <a
            className={styles.btnCotizar}
            href="https://wa.me/573196659252"
            target="_blank"
            rel="noopener noreferrer"
            onClick={cerrarMenu}
          >
            {t("cotizar")} ↗
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;