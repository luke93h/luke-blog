import React, { Component } from 'react'
import styles from './index.css'
class Articles extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <div
                className={styles.main}
            >
                <div className={styles.head}>
                    <img src="./images/user.png" alt=""/>
                </div>
            </div>
            
        )
    }
}

export default Articles