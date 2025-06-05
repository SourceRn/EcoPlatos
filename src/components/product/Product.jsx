import React from "react";
import "./Product.css";
import { motion } from "framer-motion";

export default function Product({ onClose, product }) {
  return (
    <motion.article
      className="product"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <header className="product-header">
        <h2 className="product-title">{product.name} - #{product.id}</h2>
      </header>
      <main className="product-main">
        <ul className="product-list">
          <li className="product-data">👨‍🏭 Fabricado por: {product.madeBy} </li>
          <li className="product-data">♻️ Hecho de: {product.material}</li>
          <li className="product-data">🌍 Hecho en: {product.madeIn}</li>
          <li className="product-data">🌱 Tu producto ha ahorrado: {product.description}</li>
        </ul>
      </main>
      <footer className="product-footer">
        <p>© 2025. Con tu Producto ayudas al Medio Ambiente</p>
        <button onClick={onClose} className="product-button">Cerrar</button>
      </footer>
    </motion.article>
  );
}