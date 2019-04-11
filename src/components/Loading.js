import React, { Component, Fragment } from 'react'

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <div className="loading-container">
                    <div className="loading load1"></div>
                    <div className="loading load2"></div>
                    <div className="loading load3"></div>
                    <div className="loading load4"></div>
                    <div className="loading load5"></div>
                </div>
            </Fragment>
        )
    }
}

export default Loading

