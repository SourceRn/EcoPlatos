import React from "react";
import "./Product.css";
import { motion } from "framer-motion";

export default function Product({ onClose }) {
  return (
    <motion.article
      className="product"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <header className="product-header">
        <h2 className="product-title">Plato#1 - PL032225906</h2>
      </header>
      <main className="product-main">
        <ul className="product-list">
          <li className="product-data">👨‍🏭 Fabricado por </li>
          <li className="product-data">♻️ Hecho de </li>
          <li className="product-data">🌍 Hecho en </li>
          <li className="product-data">🌱 Tu producto ha ahorrado</li>
        </ul>
      </main>
      <footer className="product-footer">
        <p>© 2025. Con tu Producto ayudas al Medio Ambiente</p>
        <button onClick={onClose} className="product-button">Cerrar</button>
      </footer>
    </motion.article>
  );
}