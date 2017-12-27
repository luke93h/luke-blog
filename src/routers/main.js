import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
const FullRoster = () => (
    <div>
        <ul>
            1qwe
        </ul>
    </div>
)

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
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
                <Route exact path='/roster' component={FullRoster} />
                <Route path='/roster/:number' component={Player} />
            </Switch>
        )
    }
}

export default Main