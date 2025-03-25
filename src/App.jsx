import { useState } from 'react';
import './App.css';
import Product from './components/product/Product';
import { AnimatePresence } from "framer-motion"; // Importar AnimatePresence

function App() {
  const [showProduct, setShowProduct] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: No permitir que el input esté vacío
    if (productCode.trim() === "") {
      setError("Por favor, ingresa un código de producto.");
      return;
    }

    // Si pasa la validación, ocultar el error y renderizar el producto
    setError("");
    setShowProduct(true);
  };

  return (
    <div className='container'>
      <AnimatePresence>
        {showProduct && <Product key="product" onClose={() => setShowProduct(false)} />}
      </AnimatePresence>
      <article className="app">
        <header>
          <h1>
            <span className='eco'>Eco</span>
            <span className='platos'>Platos</span> 🍽️
          </h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Código de Producto" value={productCode} onChange={(e) => setProductCode(e.target.value)}/>
            <button className='code-button'>Busca tu 🍽️</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </main>
        <footer>
          <p>© 2025</p>
        </footer>
      </article>
    </div>
  );
}

export default App;