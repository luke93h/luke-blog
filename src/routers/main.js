import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles.js'

const Player = () => {
    return (
        <div>
            <h1>123</h1>
            <h2>456</h2>
        </div>
    )
}
class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Articles} />
                <Route path='/roster/:number' component={Player} />
            </Switch>
        )
    }
}

export default Main