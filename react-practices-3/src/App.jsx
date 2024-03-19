import './App.css';
import NavBer from './components/NavBer';

function App() {
  const routes = [
    { path: '/', name: 'Home', id: 1 },
    { path: '/about', name: 'About', id: 2 },
    { path: '/services', name: 'Services', id: 3 },
    { path: '/products', name: 'Products', id: 4 },
    { path: '/contact', name: 'Contact', id: 5 },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <NavBer routes={routes} />
    </div>
  );
}

export default App;
