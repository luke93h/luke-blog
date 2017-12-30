import React, { Component } from 'react'
import styles from './index.css'
import Hammer from 'react-hammerjs';
import requestAnimFrame from '../../utils/requestAnimFrame.js'
class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeClass: '',
            fullClass: '',
            position: {},
            wrapperStyle: {},
            initPos:{}
        }
        this.isFull = false
    }
    onTouchStart(e) {
        if (this.isFull) {
            return
        }
        var rect = e.currentTarget.getBoundingClientRect()
        this.rect = rect
        this.setState({
            activeClass: styles.active,
            wrapperStyle: {
                height: rect.bottom - rect.top + 'px'
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
        if(this.isFull){
            return
        }
        this.isFull = true
        var rect = this.rect
        this.top = rect.top
        this.setState({
            fullClass: styles.full,
            activeClass: '',
            initPos: {
                top: rect.top
            }
        })
        this.step((new Date()).valueOf())
    }
    step(timestamp) {
        var start = this.start
        if (!start) start = this.start = timestamp;
        var progress = (new Date()).valueOf() - start;
        this.setState({
            fullClass: styles.full,
            activeClass: '',
            initPos: {
                top: (1-progress/300)*this.top + 'px'
            }
        })
        if (progress < 300) {
            requestAnimFrame(this.step.bind(this));
        }
    }
    render() {
        // 三层包装，第一层做占位元素，防止后面元素顶上来
        // 第二层，点开后作为容器，fixed充满屏幕
        // 第三层为真实内容，做动画
        return (
            <div style={this.state.wrapperStyle} className={styles.wrapper}>
                <Hammer 
                    // 通过css类添加最终覆盖页面的最终值
                    onTouchStart={this.onTouchStart.bind(this)} 
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onTap={this.onTap.bind(this)}
                    // 通过计算的得到的初始值
                    style={this.state.position}
                >
                    <div className={`${styles.main} ${this.state.activeClass} ${this.state.fullClass}`}  >
                        <div className={styles.body} style={this.state.initPos}>
                            <div className={styles.head}>
                                <img src="./images/img2.jpg" alt="" />
                            </div>
                            <div className={`${styles.content}`}>
                                {
                                    this.props.children
                                }
                            </div>
                        </div>
                    </div>
                </Hammer>
            </div>
        )
    }
}

export default Box