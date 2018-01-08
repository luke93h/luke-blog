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
        console.log(this.props)
        return (
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
        )
    }
}

export default withRouter(Main)    