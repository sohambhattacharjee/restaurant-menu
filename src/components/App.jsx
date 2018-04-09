import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import routes from '../routes/routes'

class App extends Component {
    render() {
        return (<div>
            <h3>Welcome to Chef Chu's Restaurant</h3>
            <Link to='/'><button>Home</button></Link>
            <Link to='/categories'><button>Categories</button></Link>
            <br />
            <br />
            <div style={{ display: 'flex' }}>
                {
                    routes.map(({ path, exact, component: Component}) => (
                        <Route key={path} path={path} exact={exact} render={(props) => (
                            <Component {...props} />
                        )} />
                    ))
                }
            </div>
        </div>
        )
    }
}

export default hot(module)(App)