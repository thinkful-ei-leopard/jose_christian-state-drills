 import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
    bulletInChamber: 8}
    

    state = {
    chamber: null,
    spinningTheChamber: false
};


    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout (() => {
            const randomChamber = Math.ceil(Math.random() * 8)

        this.setState ({
            chamber: randomChamber,
            spinningTheChamber: false,
        })
     }, 2000)
    }
    
    createEl () {
        if(this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            return 'Bang!!!'
        }
        else {
            return 'you are safe!'
        }
    }

    render () {
        return (
            <div> 
                <p> {this.createEl()} </p> 
                <button onClick={this.handleClick}> Pull the Trigger </button>
            </div>
        )
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }  
}


