import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importar el archivo JavaScript de Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar/Navbar";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Detail />} />
        <Route path="/item/:productid" element={<Detail />} />    
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/DetalleProducto" element={<Detail />} />        
        <Route path="/DetalleProducto/:productid" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
