import React, { Component } from 'react'
import styles from './footer.css'
import  NaviItem from '../components/naviItem'
class Footer extends Component {
    render() {
        return (
            <div className={styles.main}>
                <NaviItem
                    icon='icon-shouye'
                    to='/'
                />
                <NaviItem
                    icon='icon-fenlei'
                    to='/apps'
                />
                <NaviItem
                    icon='icon-wode'
                    to='/user'
                />
            </div>
        )
    }
}

export default Footer