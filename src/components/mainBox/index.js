import React, { Component } from 'react'
import styles from './index.css'
import Hammer from 'react-hammerjs';
class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeClass: '',
            fullClass: '',
            isFull: false,
            position: {},
            wrapperStyle: {}
        }
    }
    onTouchStart(e) {
        var rect = e.currentTarget.getBoundingClientRect()
        this.setState({
            activeClass: styles.active,
            position: {
                left: rect.left + 'px',
                top: rect.top + 'px',
                right: document.body.clientWidth - rect.right + 'px',
                bottom: rect.bottom,
            },
            wrapperStyle: {
                height: rect.bottom -  rect.top + 'px'
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
            <div style={this.state.wrapperStyle} className={styles.wrapper}>
                <Hammer 
                    className={`${styles.main} ${this.state.activeClass} ${this.state.fullClass}`}  
                    onTouchStart={this.onTouchStart.bind(this)} 
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onTap={this.onTap.bind(this)}
                    style={this.state.position}
                >
                    <div className="text">
                    
                        <div className={styles.test}>

                        </div>
                        
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        {
                            this.props.children
                        }
                    </div>
                </Hammer>
            </div>
        )
    }
}

export default Box