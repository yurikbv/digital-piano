import React from 'react';
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import styles from './App.module.css';

// type List<TEntity> = TEntity[];
// const numbers: List<number> = [1, 2, 3];

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}/>
      <Footer />
    </div>
  );
}

export default App;
