import logo from './logo.svg';
import './App.css';
import Countries from './features/countries/Countries';
import Products from './features/products/Products';
import { Link, Outlet } from 'react-router-dom';
import Header from './header';


function App() {
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>APP</h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App; 