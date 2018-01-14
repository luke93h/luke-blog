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
                <div className={styles.title}>
                    
                组件库
                </div>
                <div className={styles.none}>
                    暂无内容
                    <br/>
                    敬请期待
                </div>
            </div>

            
        )
    }
}

export default Articles