import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles'
import User from './user'
import Apps from './apps'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withRouter } from 'react-router'
import styles from './main.css'

class Main extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        var location = this.props.location
        return (
<<<<<<< HEAD
            <div
                className={styles.main}
            >
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames="example"
                    >
                        <Switch
                            location={location}
                        >
                            <Route
                                exact 
                                path='/' 
                                component={Articles}
                                key='/'
                            />
                            <Route 
                                path='/projects/:number' 
                                component={Player}
                                key='projects'
                            />
                            <Route 
                                path='/user' 
                                component={Player} 
                                key='user'
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
=======
            <TransitionGroup 
                className={styles.main}
            >
                <CSSTransition
                    key={location.pathname}
                    timeout={{ enter: 800, exit: 400 }}
                    classNames="fade"
                >
                    <Switch
                        location={location}
                    >
                        <Route
                            exact 
                            path='/' 
                            component={Articles}
                            key='/'
                        />
                        <Route 
                            path='/apps' 
                            component={Apps}
                            key='apps'
                        />
                        <Route 
                            path='/user' 
                            render={() => <User/>} 
                            key='user'
                        />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
>>>>>>> 763799bcbfccd9171c07d4d7c0490ca6c6cfef43
        )
    }
}

export default withRouter(Main)    