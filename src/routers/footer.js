import React, { Component } from 'react'
import styles from './footer.css'
import NaviItem from '../components/naviItem'
import { withRouter } from 'react-router'
class Footer extends Component {
    constructor(props){
        super(props)
        var cur = 0
        var curPath = props.location.pathname
        if(curPath.indexOf('apps')>=0){
            cur = 1
        }else if(curPath.indexOf('user')>=0){
            cur = 2
        }
        this.state={
            cur: cur
        }
    }
    switch(i){
        this.setState({
            cur: i
        })
    }
    render() {
        return (
            <div className={styles.main}>
                <NaviItem
                    icon='icon-shouye'
                    to='/'
                    active={this.state.cur === 0}
                    onClick={() => {this.switch(0)}}
                />
                <NaviItem
                    icon='icon-fenlei'
                    to='/apps'
                    active={this.state.cur === 1}
                    onClick={() => {this.switch(1)}}
                />
                <NaviItem
                    icon='icon-wode'
                    to='/user'
                    active={this.state.cur === 2}
                    onClick={() => {this.switch(2)}}
                />
            </div>
        )
    }
}

export default withRouter(Footer)