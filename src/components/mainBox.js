import React, { Component } from 'react'
import styles from './mainBox.css'
import Hammer from 'react-hammerjs';
class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeClass: '',
            fullClass: '',
            isFull: false,
            position: {}
        }
    }
    onTouchStart(e) {
        var rect = e.currentTarget.getBoundingClientRect()
        console.log(rect)
        this.setState({
            activeClass: styles.active,
            position: {
                left: rect.left,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom
            }
        })
    }
    onTouchEnd() {
        this.setState({
            activeClass: ''
        })
    }
    onTap(){
        this.setState({
            isFull: true,
            fullClass: styles.full
        })
    }
    render() {
        return (
            <Hammer 
                className={`${styles.main} ${this.state.activeClass} ${this.state.fullClass}`}  
                onTouchStart={this.onTouchStart.bind(this)} 
                onTouchEnd={this.onTouchEnd.bind(this)}
                onTap={this.onTap.bind(this)}
                style={this.state.position}
            >
                <div className="text">
                    {
                        this.setState.isFull && <div>
                            我是内容
                        </div>
                    }
                </div>
            </Hammer>
        )
    }
}

export default Box