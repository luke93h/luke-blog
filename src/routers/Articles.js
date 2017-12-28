import React, { Component } from 'react'
import styles from './Articles.css'
import MainBox from '../components/mainBox'
class Articles extends Component {
    render() {
        return (
            <div className={styles.main}>
                <MainBox></MainBox>
            </div>
        )
    }
}

export default Articles