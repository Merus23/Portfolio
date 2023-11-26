import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span className={styles.blur}></span>
        <span className={styles.blur}></span>
        <h4>CREATE YOUR SITE LIKE A PRO</h4>
        <h1>Hi, I'm <span>Mateus</span>, Web Developer</h1>
        <p>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className='image'>
        <img src="src/assets/header.png" alt="Image with a programmer as background."/>
      </div>
    </header>
  )
}

export default Home
