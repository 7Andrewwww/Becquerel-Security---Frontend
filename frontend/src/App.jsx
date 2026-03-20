import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Seguridad from "./pages/Seguridad";
import Nosotros from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idseguridad" element={<Seguridad />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;