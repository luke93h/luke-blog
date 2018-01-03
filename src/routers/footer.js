import React, { Component } from 'react'
import styles from './footer.css'
import  NaviItem from '../components/naviItem'
class Footer extends Component {
    render() {
        return (
            <div className={styles.main}>
                <NaviItem
                    icon='icon-shouye'
                />
                <NaviItem
                    icon='icon-fenlei'
                />
                <NaviItem
                    icon='icon-wode'
                />
            </div>
        )
    }
}

export default Footer