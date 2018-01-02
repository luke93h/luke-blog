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
            closeClass: '',
            position: {},
            wrapperStyle: {},
            initPos:{},
            mainPos: 'relative',
            isContent: false
        }
        this.onTouchStart = this.onTouchStart.bind(this)
        this.onTouchEnd = this.onTouchEnd.bind(this)
        this.onTap = this.onTap.bind(this)
        this.close = this.close.bind(this)
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
        setTimeout(() => {
            this.setState({
                isFullComplete: true
            })
        }, 500);
        var rect = this.rect
        this.top = rect.top
        this.bottom = window.screen.height - rect.bottom
        this.setState({
            fullClass: styles.full,
            activeClass: '',
            closeClass: '',
            initPos: {
                top: rect.top,
                bottom: rect.bottom
            },
            isContent: true
        })
        this.start = (new Date()).valueOf()
        this.step()
    }
    step(timestamp) {
        var start = this.start
        if (!start) start = this.start = timestamp;
        var progress = (new Date()).valueOf() - start;
        var calProgress = this.calPro(progress/300)
        this.setState({
            initPos: {
                top: (1-calProgress)*this.top + 'px',
                bottom: (1-calProgress)*this.bottom + 'px',
            }
        })
        if (progress < 300) {
            requestAnimFrame(this.step.bind(this));
        }else{
            this.setState({
                initPos: {
                    top: '0px',
                    bottom: '0px'
                }
            })
        }
    }
    close() {
        var rect = this.rect
        this.top = rect.top
        this.bottom = window.screen.height - rect.bottom
        this.setState({
            fullClass: '',
            closeClass: styles.close,
            activeClass: '',
            initPos: {
                top: 0,
                bottom: 0
            },
            isFullComplete: false
        }, () => {
            this.isFull = false
        })
        this.start = (new Date()).valueOf()
        this.reverseStep()
        setTimeout(() => {
            this.setState({
                mainPos: 'relative'
            })
        }, 300);
    }
    reverseStep(timestamp) {
        var start = this.start
        if (!start) start = this.start = timestamp;
        var progress = (new Date()).valueOf() - start;
        var calProgress = this.calReversePro(progress / 300)
        this.setState({
            finalPos: {
                top: calProgress * this.top + 'px',
                bottom: calProgress * this.bottom + 'px',
            }
        })
        if (progress < 300) {
            requestAnimFrame(this.reverseStep.bind(this));
        } else {
            this.setState({
                finalPos: {
                },
                closeClass: '',
                isContent: false
            })
        }
    }
    calPro(pro){
        if(pro<0.9){
            return pro/0.8
        }else{
            return 1/0.8 - pro/0.8 + 1 
        }
    }
    calReversePro(pro){
        if (pro < 0.9) {
            return pro / 0.8
        } else {
            return 1 / 0.8 - pro / 0.8 + 1
        }
    }
    render() {
        // 三层包装，第一层做占位元素，防止后面元素顶上来
        // 第二层，点开后作为容器，fixed充满屏幕
        // 第三层为真实内容，做动画
        return (
            // 第一层，占位元素
            <div style={this.state.wrapperStyle} className={styles.wrapper}>
                <Hammer 
                    // 通过css类添加最终覆盖页面的最终值
                    onTouchStart={this.onTouchStart} 
                    onTouchEnd={this.onTouchEnd}
                    onTap={this.onTap}
                    // 通过计算的得到的初始值
                    // 第二层，容器
                >
                    <div className={`${styles.main} ${this.state.activeClass} ${this.state.fullClass} ${this.state.closeClass}`}>
                        {this.state.isFullComplete && 
                        <Hammer
                            onTap={this.close}
                        >
                            <div className={`iconfont icon-guanbi ${styles.closeIcon}`}></div>
                        </Hammer>
                        // 第三层，内容
                        }
                        <div className={styles.body} style={{...this.state.initPos, ...this.state.finalPos}}>
                            <div className={styles.head}>
                                <img src="./images/img2.jpg" alt="" />
                            </div>
                            <div className={`${styles.content} ${this.state.isContent? '' : styles.hide}`}>
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