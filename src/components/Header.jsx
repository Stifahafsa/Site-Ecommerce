import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>HMH</div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/">Products</Link>
        <Link to="/">Pages</Link>
      </nav>
    </header>
  )
}

