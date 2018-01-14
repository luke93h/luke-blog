import React, { Component } from 'react'
import styles from './index.css'
class User extends Component{
    render(){
        return <div className={styles.main}>
            <div className={styles.item}>
                <div className={styles.title}>学历：</div>
                <div className={styles.content}>211</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>毕业学校：</div>
                <div className={styles.content}>河海大学</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>身高：</div>
                <div className={styles.content}>175cm</div>
            </div>
        </div>
    }
}
export default User