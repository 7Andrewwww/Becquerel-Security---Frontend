import styles from "./Hero.module.css";
import heroBg from "../assets/hero-bg.jpg";
import productos from "../assets/Productos.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  // Separa la última palabra para ponerle el subrayado degradado
  const titulo = t("heroTitulo");
  const palabras = titulo.split(" ");
  const ultimaPalabra = palabras.pop();
  const restoTitulo = palabras.join(" ");

  return (
    <section className={styles.hero}>
      <div
        className={styles.heroContainer}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className={styles.heroText}>
          <h1>
            {restoTitulo}{" "}
            <span className={styles.heroTextoAcento}>{ultimaPalabra}</span>
          </h1>

          <p>{t("heroDescripcion")}</p>

          <div className={styles.heroButtons}>
            <a href="#productos" className={styles.btnProductos}>
              {t("btnProductos")}
            </a>
            <a href="/nosotros" className={styles.btnNosotros}>
              {t("btnNosotros")}
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={productos} alt={t("productosAlt")} />
        </div>
      </div>
    </section>
  );
}

export default Hero;