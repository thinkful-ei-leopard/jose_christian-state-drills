import React from 'react';
export default class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };
    handleClick = (change) => {
        this.setState({
            who: change
        })
    };
    render() {
    return (<div>
        <button onClick={() => this.handleClick('friend')}>friend</button>
        <button onClick={() => this.handleClick('react')}> react </button>
        <button onClick={() => this.handleClick('world')}> world</button>
                <p> Hello, {this.state.who}</p>
            </div>)
    }
}