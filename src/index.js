import ReactDom from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className='container'>
            <nav className='navbar sticky-top navbar-light bg-dark mb-4'>
                <h1 className='text-center text-light fs-3 fw-bold '>Rick and morty</h1>
            </nav>
            <List />
        </div>
    )
};

const container = document.getElementById("app");
const root = ReactDom.createRoot(container);
root.render(<App />); 