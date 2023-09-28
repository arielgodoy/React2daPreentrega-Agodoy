import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import './dashboard.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';


function Dashboard() {
    return (
        <div className="layout">
            <header>
                <Header />
                <div className="navigation"><Navigation /></div>
            </header>

            <aside><Sidebar /></aside>
            <main className='section'>
                <MainContent />
                <article></article>
            </main>
            
            <footer><Footer /></footer>
        </div>
    );
}

export default Dashboard;


