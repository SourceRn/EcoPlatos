import { useState } from 'react';
import './App.css';
import Product from './components/product/Product';
import { AnimatePresence } from "framer-motion"; // Importar AnimatePresence

function App() {
  const [showProduct, setShowProduct] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: No permitir que el input esté vacío
    if (productCode.trim() === "") {
      setError("Por favor, ingresa un código de producto.");
      return;
    }

    // Si pasa la validación, ocultar el error y renderizar el producto
    setError("");

    try {
      const response = await fetch(`http://localhost:8080/api/products/${productCode}`);
      if (!response.ok) {
        throw new Error("Producto no encontrado");
      }
      const data = await response.json();
      setProduct(data);
      setShowProduct(true);
    } catch (err) {
      setError("Error al buscar el producto. Por favor, intenta de nuevo.");
      setShowProduct(false);
      return;
    }

  };

  return (
    <div className='container'>
      <AnimatePresence>
        {showProduct && product && (
          <Product key="product" product={product} onClose={() => setShowProduct(false)} />
        )}
      </AnimatePresence>
      <article className="app">
        <header>
          <h1>
            <span className='eco'>Cuchar</span>
            <span className='platos'>ITA</span> 🍽️
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