import "./MisionVision.css";
import heroBg from "../assets/hero-bg.jpg";
import productos from "../assets/Productos.png";
import { useTranslation } from "react-i18next";

function MisionVision() {
  const { t } = useTranslation();

  return (
    <section className="mvWrapper">

      {/* MISIÓN — imagen a la derecha */}
      <div className="mvCard">
        <div className="mvContainer">

          <div className="mvImageWrapper">
            <div
              className="mvImageBg"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              <div className="mvImage">
                <img src={productos} alt={t("productosAlt")} />
              </div>
            </div>
          </div>

          <div className="mvTexto">
            <span className="mvEtiqueta">Quiénes somos</span>
            <h2 className="mvTitle">{t("misionTitulo")}</h2>
            <div className="mvBarra" />
            <p className="mvText">{t("misionTexto")}</p>
          </div>

        </div>
      </div>

      {/* VISIÓN — imagen a la izquierda */}
      <div className="mvCard">
        <div className="mvContainer invertido">

          <div className="mvImageWrapper">
            <div
              className="mvImageBg"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              <div className="mvImage">
                <img src={productos} alt={t("productosAlt")} />
              </div>
            </div>
          </div>

          <div className="mvTexto">
            <span className="mvEtiqueta">Hacia dónde vamos</span>
            <h2 className="mvTitle">{t("visionTitulo")}</h2>
            <div className="mvBarra" />
            <p className="mvText">{t("visionTexto")}</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default MisionVision;