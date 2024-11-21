import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#products">Products</a>
        <a href="#pages">Pages</a>
      </div>
      <p>Copyright © 2024 HMH . All Rights Reserved.</p>
    </footer>
  )
}

