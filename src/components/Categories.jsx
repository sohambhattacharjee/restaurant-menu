import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import fetchCategoryData from '../actions/fetchCategoryData'

class Categories extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            categories: []
        }
    }
    componentDidMount() {
        fetchCategoryData().then(cat => {
            this.setState({ categories: cat, loading: false })
        })
    }
    render() {
        return <div style={{ display: 'flex' }}>
            Menu Categories
            <br />
            {this.state.loading ? 'Loading...' :
                <ul>
                    {this.state.categories.map((cat, idx) => {
                        return <li key={idx}><Link to={`${this.props.match.path}/items/${cat.short_name}`}>{`${cat.name} (${cat.short_name})`}</Link></li>
                    })}
                </ul>
            }
        </div>
    }
}

export default Categories
