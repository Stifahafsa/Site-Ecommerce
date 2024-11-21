import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import styles from './MainContent.module.css';

const products = [
  { id: 1, name: 'Denim Jacket', brand: 'Al Karam', price: 59.00, salePrice: 39.00, reviews: 3, image: '/img/1.jpg' },
  { id: 2, name: 'White Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/2.jpeg' },
  { id: 3, name: 'Long Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/3.jpg' },
  { id: 4, name: 'Colorful Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/4.jpeg' },
  { id: 5, name: 'Full Sweater', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/5.jpeg' },
  { id: 6, name: 'White Shirt', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/6.jpeg' },
];

export default function MainContent() {
  return (
    <div className={styles.productListing}>
      {/* Add header image */}
      <img 
        src="/img/header.jpg" 
        alt="Header for New Arrivals" 
        className={styles.headerImage} 
      />
      <h1>New Arrivals</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className={styles.productLink}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
