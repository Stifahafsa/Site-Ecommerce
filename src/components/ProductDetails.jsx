import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import styles from './ProductDetails.module.css'

const products = [
  { id: 1, name: 'Denim Jacket', brand: 'Al Karam', price: 59.00, salePrice: 39.00, reviews: 3, image: '/img/1.jpg' },
  { id: 2, name: 'White Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/2.jpeg' },
  { id: 3, name: 'Long Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/3.jpg' },
  { id: 4, name: 'Colorful Dress', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/4.jpeg' },
  { id: 5, name: 'Full Sweater', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/5.jpeg' },
  { id: 6, name: 'White Shirt', brand: 'Al Karam', price: 95.50, reviews: 4100, image: '/img/6.jpeg' },
]

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [timeLeft, setTimeLeft] = useState(21600) // 6 hours in seconds
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Blue')

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':')
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
        {product.salePrice && <span className={styles.discount}>Save {Math.round((1 - product.salePrice / product.price) * 100)}%</span>}
      </div>
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <div className={styles.rating}>({product.reviews})</div>
        <button className={styles.saveButton}><Heart /> Save</button>
        <p className={styles.viewCount}>24 people are viewing this right now</p>
        <div className={styles.saleTimer}>
          <p>Hurry up! Sale ends in:</p>
          <div className={styles.timer}>{formatTime(timeLeft)}</div>
        </div>
        <div className={styles.sizeSelector}>
          <p>Size: {selectedSize}</p>
          {['M', 'L', 'XL', 'XXL'].map(size => (
            <button 
              key={size} 
              className={selectedSize === size ? styles.selected : ''}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className={styles.colorSelector}>
          <p>Color: {selectedColor}</p>
          <div className={`${styles.colorOption} ${styles.blue}`} onClick={() => setSelectedColor('Blue')}></div>
        </div>
        <div className={styles.price}>
          {product.salePrice ? (
            <>
              <span className={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
              <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className={styles.salePrice}>${product.price.toFixed(2)}</span>
          )}
        </div>
        <button className={styles.addToCartButton}><ShoppingCart /> Add to Cart</button>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
          <div className={styles.feature}>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
          <div className={styles.feature}>
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
          <div className={styles.feature}>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

