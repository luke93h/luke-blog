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
                    <div className={styles.title}>LUKE</div>
                    <div className={styles.user}>
                        <img src={require('../../assets/user.jpg')} alt=""/>
                    </div>
                    <div className={styles.headFoot}>
                        <span className='iconfont icon-liulan' style={{marginRight: '0.1rem'}}>
                        </span>
                        浏览量： 88次
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.tabs}>
                        <div className={styles.tab}>
                            关于我
                        </div>
                        <div className={styles.tab}>
                            联系方式
                        </div>
                        <div className={styles.tab}>
                            爱好
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Articles