import React, { Component } from 'react'
import styles from './index.css'
class Hobbits extends Component{
    render(){
        return <div className={styles.main}>
            <div className={styles.item} style={{borderColor:'rgba(127,223,101,0.8)'}}> 
                写代码
            </div>
            <div className={styles.item} style={{borderColor:'rgba(209,31,81,0.8)'}}>
                炉石
            </div>
            <div className={styles.item} style={{borderColor:'rgba(31,73,209,0.8)'}}>
                科幻片
            </div>
            <div className={styles.item} style={{borderColor:'rgba(209,31,73,0.8)'}}>
                War3RPG
            </div>
        </div>
    }
}
export default Hobbits