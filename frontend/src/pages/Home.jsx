import Hero from "../components/Hero";
import MisionVision from "../components/MisionVision";
import Productos from "../components/Productos";
import Recursos from "../components/Recursos";
import productosData from "../data/productos";

function Home() {
  return (
    <>
      <Hero />
      <MisionVision />
      <Productos productosData={productosData} />
      <Recursos />
    </>
  );
}

export default Home;