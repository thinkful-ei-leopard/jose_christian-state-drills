import React from 'react';

export default class Bomb extends React.Component {
    state= {
        count: 0
    }
    componentDidMount() {this.interval = setInterval(() => {
        this.setState({
        count: this.state.count + 1
        })
    }, 1000)}

    createEl() {
        if(this.state.count % 2 === 0) {
            return 'tick'
        }else if(this.state.count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
        <div>
       <p>{this.createEl()}</p>
       </div>
        )
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
}