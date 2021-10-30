import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"usha"
        }
    }
    render(){
        setTimeout(() => {
            this.setState({name:"usha karri"})
            
        }, 1000);
        return (
            <div>

            <h1>{this.state.name}</h1>
                
            </div>
        )
    }
}
