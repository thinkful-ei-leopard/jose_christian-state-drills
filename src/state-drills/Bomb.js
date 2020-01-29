import React from 'react';

// export default class Bomb extends React.Component {
//     state= {
//         count: 0
//     }
//     componentDidMount() {let interval = setInterval(() => {
//         this.setState({
//         count: this.state.count+=1
//         })
//     }, 1000)}
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }


// export default class Bomb extends React.Component {
//     state= {
//         count: 0
//     }
//     componentDidMount() {this.interval = setInterval(() => {
//         this.setState({
//         count: this.state.count + 1
//         })
//     }, 1000)}
//     render() {
//         return (
//             <div>
//                 <p>tick</p>
//             </div>
//         )
//     }
// }

export default class Bomb extends React.Component {
    state= {
        count: 0
    }
    componentDidMount() {this.interval = setInterval(() => {
        this.setState({
        count: this.state.count + 1
        })
    }, 1000)}
    render() {
        return (
            <div>
                {this.state.count % 2 ? <p>tick</p> : this.state.count >= 8 ? <p>BOOM!!!</p> : <p>tock</p>}
            </div>
        )
    }
}