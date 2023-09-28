// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <MainContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
