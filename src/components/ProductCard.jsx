import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      {product.salePrice ? (
        <div>
          <span className={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
        </div>
      ) : (
        <p>${product.price.toFixed(2)}</p>
      )}
      <p>({product.reviews}) Customer Reviews</p>
    </div>
  )
}

