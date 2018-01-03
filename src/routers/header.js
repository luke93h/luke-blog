import React, { Component } from 'react'
import styles from './header.css';
class Header extends Component {
    render() {
        return (
            <header className={styles.head}>
                <span>Luke</span>
            </header>
        )
    }
}
export default Header