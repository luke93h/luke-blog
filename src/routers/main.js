import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles.js'
import { CSSTransition } from 'react-transition-group'

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
        return (<div>
            <CSSTransition
                classNames="example"
                timeout={1000}
            >
                <Switch>
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
        </div>
        )
    }
}

export default Main