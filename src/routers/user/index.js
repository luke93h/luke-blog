import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import User from './User'
import Contact from './Contact'
import Hobbits from './Hobbits'
import styles from './index.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Articles extends Component {
    constructor(props){
        super(props)
        this.state={
            cur: 0
        }
    }
    componentDidMount(){
    }
    switchTab(index){
        this.setState({
            cur: index
        })
    }
    render() {
        var location = this.props.location
        var key = location.pathname
        return (
            <div
                className={styles.main}
            >
                <div className={styles.head}>
                    <div className={styles.title}>LUKE</div>
                    <div className={styles.user}>
                        <img src={require('../../assets/user.jpg')} alt=""/>
                    </div>
                    <div className={styles.headfoot}>
                        <span className='iconfont icon-liulan' style={{marginRight: '0.1rem'}}>
                        </span>
                        浏览量： 88次
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.tabs}>
                        <Link 
                            to='/user'
                            className={`${styles.tab} ${this.state.cur === 0 ? styles.active : ''}`}
                            onClick={() => { this.switchTab(0) }}
                        >
                            关于我
                        </Link>
                        <Link
                            to='/user/contact' 
                            className={`${styles.tab} ${this.state.cur === 1 ? styles.active : ''}`}
                            onClick={() => { this.switchTab(1) }}
                        >
                            联系方式
                        </Link>
                        <Link
                            to='/user/hobbits' 
                            className={`${styles.tab} ${this.state.cur === 2 ? styles.active : ''}`}
                            onClick={() => { this.switchTab(2) }}
                        >
                            爱好
                        </Link>
                    </div>
                    <TransitionGroup 
                        className={styles.wrapper}
                    >
                        <CSSTransition
                            key={key}
                            timeout={{ enter: 800, exit: 400 }}
                            classNames="rotate"
                        >
                            <Switch
                                location={location}
                            >
                                <Route
                                    exact 
                                    path='/user' 
                                    component={User}
                                    key='/user'
                                />
                                <Route 
                                    path='/user/contact' 
                                    component={Contact}
                                    key='/user/contact'
                                />
                                <Route
                                    path='/user/hobbits' 
                                    component={Hobbits}
                                    key='/user/hobbits'
                                />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
            
        )
    }
}

export default Articles