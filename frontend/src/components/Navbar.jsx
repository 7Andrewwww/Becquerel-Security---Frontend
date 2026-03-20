import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

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
    { code: "es", flag: "🇪🇸", label: "ES" },
    { code: "en", flag: "🇺🇸", label: "EN" },
    { code: "pt", flag: "🇧🇷", label: "PT" },
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
            {idiomas.map((idioma) => (
              <button
                key={idioma.code}
                className={`${styles.langBtn} ${currentLang === idioma.code ? styles.activeLang : ""}`}
                onClick={() => changeLanguage(idioma.code)}
                title={idioma.code.toUpperCase()}
              >
                <span className={styles.langFlag}>{idioma.flag}</span>
                <span className={styles.langLabel}>{idioma.label}</span>
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

        {/* NUEVO: botón hamburger para móvil */}
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

      {/* NUEVO: menú móvil desplegable */}
      <div className={`${styles.mobileMenu} ${menuAbierto ? styles.mobileMenuOpen : ""}`}>
        <a href="/" onClick={irAlInicio}>{t("inicio")}</a>
        <a href="#productos" onClick={irAProductos}>{t("productos")}</a>
        <Link to="/idseguridad" onClick={cerrarMenu}>{t("seguridad")}</Link>
        <Link to="/nosotros" onClick={cerrarMenu}>{t("nosotros")}</Link>
        <Link to="/contacto" onClick={cerrarMenu}>{t("contacto")}</Link>

        {/* Idioma + cotizar en móvil */}
        <div className={styles.mobileBottom}>
          <div className={styles.languageSwitcher}>
            {idiomas.map((idioma) => (
              <button
                key={idioma.code}
                className={`${styles.langBtn} ${currentLang === idioma.code ? styles.activeLang : ""}`}
                onClick={() => changeLanguage(idioma.code)}
              >
                <span className={styles.langFlag}>{idioma.flag}</span>
                <span className={styles.langLabel}>{idioma.label}</span>
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