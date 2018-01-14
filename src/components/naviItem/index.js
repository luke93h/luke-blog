import React, { Component } from 'react'
import styles from './index.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
            active: false
        }
        this.onTouchStart = this.onTouchStart.bind(this)
        this.onTouchEnd = this.onTouchEnd.bind(this)
    }
    onTouchStart() {
        this.setState({
            active: true
        })
    }
    onTouchEnd() {
        this.setState({
            active: false
        })
    }
    render() {
        return (
            <Link 
                className = {`${styles.item} ${this.state.active || this.props.active ?styles.active:''}`}
                onTouchStart = {this.onTouchStart}
                onTouchEnd = {this.onTouchEnd}
                to = {this.props.to}
                onClick = {this.props.onClick}
            >
                <div className={`iconfont ${this.props.icon}`}></div>
            </Link>
        )
    }
}

export default Footer