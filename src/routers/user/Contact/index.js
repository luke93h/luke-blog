import React, { Component } from 'react'
import styles from './index.css'
class Contact extends Component{
    render(){
        return <div className={styles.main}>
            <div className={styles.item}>
                <div className={styles.title}>QQ：</div>
                <div className={styles.content}>543564013</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>微信：</div>
                <div className={styles.content}>l543564013</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>邮箱：</div>
                <div className={styles.content}>543564013@qq.com</div>
            </div>
        </div>
    }
}
export default Contact