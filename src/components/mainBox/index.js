import React, { Component } from 'react'
import styles from './index.css'
import Hammer from 'react-hammerjs';
class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeClass: '',
            fullClass: '',
            position: {},
            wrapperStyle: {}
        }
        this.isFull = false
    }
    onTouchStart(e) {
        if (this.isFull) {
            return
        }
        var rect = e.currentTarget.getBoundingClientRect()
        this.setState({
            activeClass: styles.active,
            position: {
                left: rect.left + 'px',
                top: rect.top + 'px',
                right: document.body.clientWidth - rect.right + 'px',
                bottom: rect.bottom,
                minHeight: rect.bottom - rect.top + 'px'
            },
            wrapperStyle: {
                height: rect.bottom -  rect.top + 'px'
            }
        })
    }
    onTouchEnd() {
        if(this.isFull){
            return
        }
        this.setState({
            activeClass: ''
        })
    }
    onTap() {
        this.isFull = true
        this.setState({
            fullClass: styles.full,
            activeClass: ''
        })
    }
    render() {
        return (
            <div style={this.state.wrapperStyle} className={styles.wrapper}>
                <Hammer 
                    // 通过css类添加最终覆盖页面的最终值
                    className={`${styles.main} ${this.state.activeClass} ${this.state.fullClass}`}  
                    onTouchStart={this.onTouchStart.bind(this)} 
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onTap={this.onTap.bind(this)}
                    // 通过计算的得到的初始值
                    style={this.state.position}
                >
                    <div className={`${styles.body}`}>
                        <div className={styles.head}>
                            <img src="./images/img2.jpg" alt="" />
                        </div>
                        <div className={styles.content}></div>
                    </div>
                </Hammer>
            </div>
        )
    }
}

export default Box