import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="layout">
            <header>
                <Header />
            </header>
            <div className="navigation">
                <Navigation />
            </div>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <section className="section">
                    <MainContent />
                </section>
                <article></article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Dashboard;
