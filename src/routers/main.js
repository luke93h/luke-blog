import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withRouter } from 'react-router'
import './main.css'

const Player = () => {
    return (
        <div>
            <h1>123</h1>
            <h2>456</h2>
        </div>
    )
}
class Main extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        var location = this.props.location
        return (
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
        )
    }
}

export default withRouter(Main)    