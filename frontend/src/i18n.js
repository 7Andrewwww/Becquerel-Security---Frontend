import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      // Navbar
      inicio: "Inicio",
      productos: "Productos",
      seguridad: "I+D / Seguridad",
      nosotros: "Nosotros",
      contacto: "Contacto",
      cotizar: "Solicitar Cotización",

      // Hero
      heroTitulo: "Expertos en Protección Radiológica",
      heroDescripcion: "Soluciones avanzadas para la medición y la eliminación segura de la radiación",
      btnProductos: "Ver Productos",
      btnNosotros: "Sobre Nosotros",
      productosAlt: "Productos Becquerel Security",

      // IDSeguridad
      heroLabel: "I+D / Seguridad",
      heroLinea1: "Investigación,",
      heroAcento: "Desarrollo",
      heroLinea3: "y Seguridad",
      heroSubtitulo: "Soluciones científicas y tecnológicas orientadas a mejorar la seguridad radiológica, química e industrial.",
      stat1: "Áreas de desarrollo",
      stat2: "Sectores productivos",
      stat3: "Protección integral",
      introParrafo1: "En Becquerel Security desarrollamos soluciones científicas y tecnológicas orientadas a mejorar la seguridad radiológica, química e industrial...",
      introParrafo2: "Nuestro enfoque integra conocimientos de física médica, protección radiológica, ingeniería, higiene industrial y control de calidad...",
      areasTitulo: "Áreas de Desarrollo",
      areasSubtitulo: "Líneas de investigación que abarcan múltiples sectores donde la seguridad y el control de contaminación son fundamentales.",
      area1Titulo: "Descontaminación radiactiva y química",
      area1Texto: "Desarrollo de formulaciones químicas, jabones especializados y soluciones descontaminantes...",
      area2Titulo: "Seguridad en medicina nuclear y radiofarmacia",
      area2Texto: "Desarrollo de productos y protocolos destinados al control de contaminación en radiofarmacias hospitalarias, servicios de medicina nuclear y laboratorios de investigación...",
      area3Titulo: "Seguridad industrial y control de riesgos tecnológicos",
      area3Texto: "Investigación y desarrollo de soluciones para instalaciones industriales con riesgos radiológicos, químicos o físicos...",
      area4Titulo: "Aplicaciones en seguridad institucional y militar",
      area4Texto: "Desarrollos orientados hacia entornos de seguridad institucional y militar, garantizando procedimientos adecuados de control de contaminación...",
      area5Titulo: "Seguridad Radiológica y Gestión del Riesgo",
      area5Texto: "Soluciones fundamentadas en recomendaciones internacionales de protección radiológica y seguridad ocupacional...",
      area6Titulo: "Seguridad y Salud en el Trabajo",
      area6Texto: "Articulamos nuestras soluciones con los principios de SST para la prevención y control de riesgos laborales...",
      area7Titulo: "Innovación y Desarrollo Tecnológico",
      area7Texto: "Promovemos una cultura de innovación científica orientada a organizaciones que trabajan con radiación, sustancias peligrosas o procesos industriales complejos...",
      ctaTitulo: "¿Tu organización necesita soluciones de seguridad radiológica?",
      ctaTexto: "Contáctanos y diseñamos juntos la solución que tu entorno requiere.",
      ctaBtn: "Solicitar Asesoría",

      // Contacto
      contactoEtiqueta: "Contáctanos",
      contactoTitulo: "¿Hablamos?",
      contactoDescripcion: "Estamos disponibles para resolver tus dudas, atender solicitudes o diseñar juntos la solución que tu organización necesita.",
      contactoDirecto: "Contacto directo",
      correo: "Correo electrónico",
      whatsapp: "WhatsApp",
      siguenos: "Síguenos",
      redesDescripcion: "Encuéntranos en nuestras redes sociales y mantente al día con nuestras novedades.",

      // Nosotros
      nosotrosTitulo: "Nosotros",
      nosotrosSubtitulo: "Somos una empresa en busca de cubrir las necesidades de la industria y el ámbito médico...",
      davidDescripcion: "Físico médico (M.Sc.) con experiencia en protección radiológica, medicina nuclear y docencia. ...",
      lidaDescripcion: "Física Médica (M.Sc.) de la Pontificia Universidad Javeriana y Lic. en Física de la Universidad Distrital, con formación...",

      // Footer
      logoAlt: "Becquerel Security",
      correoContacto: "becquesecsas@gmail.com",
      telefono: "573196659252",
      telefonoDisplay: "+57 319 6659252",
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      x: "X",

      // Misión y Visión
      misionTitulo: "MISIÓN",
      misionTexto: "Becquerel Security brinda servicios de seguridad y protección radiológica en el buen uso de radiación ionizante y no ionizante para la industria y el ámbito médico, ofreciendo productos y asesorías técnicas que garantizan el bienestar de nuestros colaboradores, con compromiso social y medioambiental.",
      visionTitulo: "VISIÓN",
      visionTexto: "Para el 2030 seremos la primera empresa colombiana en brindar un amplio portafolio de productos y servicios que permitirá satisfacer los requerimientos de cada uno de nuestros clientes, apoyando el cumplimiento de la normativa nacional y las recomendaciones internacionales en protección radiológica.",

      // Recursos
      recursosTitulo: "Recursos y Descargas",
      recursosDescripcion: "Documentación técnica, fichas de seguridad y materiales de apoyo disponibles para descarga.",
      buscar: "Buscar",
      descargar: "⬇ Descargar",
      productosTitulo: "Nuestros Productos",
productosDescripcion: "Explora nuestra gama de productos diseñados para la protección radiológica, seguridad industrial y control de riesgos.",

    }
  },
  en: {
    translation: {
      inicio: "Home",
      productos: "Products",
      seguridad: "R&D / Security",
      nosotros: "About Us",
      contacto: "Contact",
      cotizar: "Request Quote",

      heroTitulo: "Experts in Radiological Protection",
      heroDescripcion: "Advanced solutions for safe measurement and elimination of radiation",
      btnProductos: "View Products",
      btnNosotros: "About Us",
      productosAlt: "Becquerel Security Products",

      heroLabel: "R&D / Security",
      heroLinea1: "Research,",
      heroAcento: "Development",
      heroLinea3: "and Safety",
      heroSubtitulo: "Scientific and technological solutions aimed at improving radiological, chemical, and industrial safety.",
      stat1: "Development Areas",
      stat2: "Productive Sectors",
      stat3: "Comprehensive Protection",
      introParrafo1: "At Becquerel Security we develop scientific and technological solutions to improve radiological, chemical, and industrial safety...",
      introParrafo2: "Our approach integrates knowledge of medical physics, radiological protection, engineering, industrial hygiene, and quality control...",
      areasTitulo: "Development Areas",
      areasSubtitulo: "Research lines covering multiple sectors where safety and contamination control are fundamental.",
      area1Titulo: "Radioactive and Chemical Decontamination",
      area1Texto: "Development of chemical formulations, specialized soaps, and decontaminating solutions...",
      area2Titulo: "Nuclear Medicine and Radiopharmacy Safety",
      area2Texto: "Development of products and protocols for contamination control in hospital radiopharmacies, nuclear medicine services, and research labs...",
      area3Titulo: "Industrial Safety and Technological Risk Control",
      area3Texto: "Research and development of solutions for industrial facilities with radiological, chemical, or physical risks...",
      area4Titulo: "Institutional and Military Safety Applications",
      area4Texto: "Developments oriented towards institutional and military safety environments, ensuring proper contamination control procedures...",
      area5Titulo: "Radiological Safety and Risk Management",
      area5Texto: "Solutions based on international radiological protection and occupational safety recommendations...",
      area6Titulo: "Occupational Health and Safety",
      area6Texto: "We align our solutions with OHS principles to prevent and control workplace risks...",
      area7Titulo: "Innovation and Technological Development",
      area7Texto: "We promote a scientific innovation culture oriented to organizations working with radiation, hazardous substances, or complex industrial processes...",
      ctaTitulo: "Does your organization need radiological safety solutions?",
      ctaTexto: "Contact us and we will design the solution your environment requires.",
      ctaBtn: "Request Consultation",

      contactoEtiqueta: "Contact us",
      contactoTitulo: "Shall we talk?",
      contactoDescripcion: "We are available to answer your questions, handle requests, or design the solution your organization needs.",
      contactoDirecto: "Direct contact",
      correo: "Email",
      whatsapp: "WhatsApp",
      siguenos: "Follow us",
      redesDescripcion: "Find us on our social networks and stay up to date with our latest news.",

      nosotrosTitulo: "About Us",
      nosotrosSubtitulo: "We are a company seeking to cover the unmet needs of the industry and medical field...",
      davidDescripcion: "Medical physicist (M.Sc.) with experience in radiological protection, nuclear medicine, and teaching. ...",
      lidaDescripcion: "Medical Physicist (M.Sc.) from Pontificia Universidad Javeriana and B.Sc. in Physics from Universidad Distrital...",

      logoAlt: "Becquerel Security",
      correoContacto: "becquesecsas@gmail.com",
      telefono: "573196659252",
      telefonoDisplay: "+57 319 6659252",
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      x: "X",

      misionTitulo: "MISSION",
      misionTexto: "Becquerel Security provides safety and radiological protection services in the proper use of ionizing and non-ionizing radiation for the industry and medical field, offering products and technical advice that guarantee the well-being of our collaborators, with social and environmental commitment.",
      visionTitulo: "VISION",
      visionTexto: "By 2030 we will be the first Colombian company to offer a broad portfolio of products and services that will meet the requirements of each of our clients, supporting compliance with national regulations and international recommendations in radiological protection.",

      recursosTitulo: "Resources and Downloads",
      recursosDescripcion: "Technical documentation, safety sheets, and support materials available for download.",
      buscar: "Search",
      descargar: "⬇ Download",
      productosTitulo: "Our Products",
productosDescripcion: "Explore our range of products designed for radiological protection, industrial safety, and risk control.",

    }
  },
  pt: {
    translation: {
      inicio: "Início",
      productos: "Produtos",
      seguridad: "P&D / Segurança",
      nosotros: "Sobre Nós",
      contacto: "Contato",
      cotizar: "Solicitar Orçamento",

      heroTitulo: "Especialistas em Proteção Radiológica",
      heroDescripcion: "Soluções avançadas para medição e eliminação segura da radiação",
      btnProductos: "Ver Produtos",
      btnNosotros: "Sobre Nós",
      productosAlt: "Produtos Becquerel Security",

      heroLabel: "P&D / Segurança",
      heroLinea1: "Pesquisa,",
      heroAcento: "Desenvolvimento",
      heroLinea3: "e Segurança",
      heroSubtitulo: "Soluções científicas e tecnológicas voltadas para melhorar a segurança radiológica, química e industrial.",
      stat1: "Áreas de Desenvolvimento",
      stat2: "Setores Produtivos",
      stat3: "Proteção Integral",
      introParrafo1: "Na Becquerel Security desenvolvemos soluções científicas e tecnológicas voltadas para melhorar a segurança radiológica, química e industrial...",
      introParrafo2: "Nossa abordagem integra conhecimentos de física médica, proteção radiológica, engenharia, higiene industrial e controle de qualidade...",
      areasTitulo: "Áreas de Desenvolvimento",
      areasSubtitulo: "Linhas de pesquisa que abrangem múltiplos setores onde a segurança e o controle de contaminação são fundamentais.",
      area1Titulo: "Descontaminação radioativa e química",
      area1Texto: "Desenvolvimento de formulações químicas, sabonetes especializados e soluções desinfectantes...",
      area2Titulo: "Segurança em medicina nuclear e radiofarmácia",
      area2Texto: "Desenvolvimento de produtos e protocolos destinados ao controle de contaminação em radiofarmácias hospitalares...",
      area3Titulo: "Segurança industrial e controle de riscos tecnológicos",
      area3Texto: "Pesquisa e desenvolvimento de soluções para instalações industriais com riscos radiológicos, químicos ou físicos...",
      area4Titulo: "Aplicações em segurança institucional e militar",
      area4Texto: "Desenvolvimentos voltados para ambientes de segurança institucional e militar, garantindo procedimentos adequados de controle de contaminação...",
      area5Titulo: "Segurança Radiológica e Gestão de Risco",
      area5Texto: "Soluções baseadas em recomendações internacionais de proteção radiológica e segurança ocupacional...",
      area6Titulo: "Segurança e Saúde no Trabalho",
      area6Texto: "Alinhamos nossas soluções aos princípios de SST para prevenir e controlar riscos no trabalho...",
      area7Titulo: "Inovação e Desenvolvimento Tecnológico",
      area7Texto: "Promovemos uma cultura de inovação científica voltada a organizações que trabalham com radiação, substâncias perigosas ou processos industriais complexos...",
      ctaTitulo: "Sua organização precisa de soluções de segurança radiológica?",
      ctaTexto: "Entre em contato e projetaremos juntos a solução que seu ambiente necessita.",
      ctaBtn: "Solicitar Consultoria",

      contactoEtiqueta: "Contate-nos",
      contactoTitulo: "Vamos conversar?",
      contactoDescripcion: "Estamos disponíveis para responder suas dúvidas, atender solicitações ou desenvolver a solução que sua organização precisa.",
      contactoDirecto: "Contato direto",
      correo: "Email",
      whatsapp: "WhatsApp",
      siguenos: "Siga-nos",
      redesDescripcion: "Encontre-nos em nossas redes sociais e fique por dentro das novidades.",

      nosotrosTitulo: "Sobre Nós",
      nosotrosSubtitulo: "Somos uma empresa buscando atender às necessidades da indústria e do setor médico...",
      davidDescripcion: "Físico médico (M.Sc.) com experiência em proteção radiológica, medicina nuclear e docência. ...",
      lidaDescripcion: "Física Médica (M.Sc.) da Pontificia Universidad Javeriana e Lic. em Física da Universidad Distrital...",

      logoAlt: "Becquerel Security",
      correoContacto: "becquesecsas@gmail.com",
      telefono: "573196659252",
      telefonoDisplay: "+57 319 6659252",
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      x: "X",

      misionTitulo: "MISSÃO",
      misionTexto: "A Becquerel Security oferece serviços de segurança e proteção radiológica no uso adequado de radiação ionizante e não ionizante para a indústria e o setor médico, oferecendo produtos e consultorias técnicas que garantem o bem-estar de nossos colaboradores, com compromisso social e ambiental.",
      visionTitulo: "VISÃO",
      visionTexto: "Até 2030 seremos a primeira empresa colombiana a oferecer um amplo portfólio de produtos e serviços que permitirá atender aos requisitos de cada um de nossos clientes, apoiando o cumprimento das normas nacionais e das recomendações internacionais em proteção radiológica.",

      recursosTitulo: "Recursos e Downloads",
      recursosDescripcion: "Documentação técnica, fichas de segurança e materiais de apoio disponíveis para download.",
      buscar: "Pesquisar",
      descargar: "⬇ Baixar",
      productosTitulo: "Nossos Produtos",
productosDescripcion: "Explore nossa gama de produtos projetados para proteção radiológica, segurança industrial e controle de riscos."
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;