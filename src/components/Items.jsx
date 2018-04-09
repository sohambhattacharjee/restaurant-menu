import React, { Component } from 'react'
import fetchItemData from '../actions/fetchItemData'

class Items extends Component {
    constructor() {
        super()
        this.state = {
            itemDetails: []
        }
    }
    getData = (itemid) => {
        fetchItemData(itemid).then(items => {
            this.setState({ itemDetails: items })
        })
    }
    componentDidMount() {
        this.getData(this.props.match.params.itemid)
    }
    componentWillReceiveProps(nextProp) {
        this.props.match.params.itemid !== nextProp.match.params.itemid &&
            this.getData(nextProp.match.params.itemid)
    }
    render() {
        return (<div><h4>Items in Category: ({this.props.match.params.itemid})</h4>
            {this.state.itemDetails.length > 0 &&
                <table style={{ border: '1px solid gray' }}>
                    <thead>
                        <tr><th>Name</th><th>Description</th></tr>
                    </thead>
                    <tbody>
                        {this.state.itemDetails.map((item, idx) => {
                            return <tr key={idx}><td>{item.name}</td><td>{item.description}</td></tr>
                        })}
                    </tbody>
                </table>
            }
        </div>)
    }
}

export default Items
