import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {} from 'antd'
import WebSocket from 'react-websocket'


export default class app extends Component {
    static defaultProps = {}

    static propTypes = {}

    constructor(props) {
        super(props);
        this.state = {
            url: 'ws://localhost:8088/reader'
        }
    }

    componentDidMount() {
    }

    // region vscode 1.17的收缩代码块功能  业务代码


    // endregion

    _onMessage(message) {
        console.log('message=>', message)

    }

    render() {
        return (
            <div className="page">
                示范页面
                <WebSocket url={this.state.url} onMessage={this._onMessage.bind(this)}/>
            </div>
        )
    }
}
