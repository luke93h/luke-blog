import React, { Component } from 'react'
import Header from './routers/header.js'
import Main from './routers/main.js'
import Footer from './routers/footer'
import styles from './App.css'

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Header />
                <Main />
                <Footer/>
            </div>
        )
    }
}

export default App
