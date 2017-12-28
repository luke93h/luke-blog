import React, { Component } from 'react'
import styles from './mainBox.css'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeClass: ''
        }
    }
    onTouchStart() {
        this.setState({
            activeClass: styles.active
        })
    }
    onTouchEnd() {
        this.setState({
            activeClass: ''
        })
    }
    render() {
        return (
            <div className={`${styles.main} ${this.state.activeClass}`} onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
                <div className="text"></div>
            </div>
        )
    }
}

export default Box