import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Trainers extends Component {
    //state declaration
    constructor(){
        super(); //call to parent(component) constructor
        this.state={
          name:"Swamini Sachin Bhagwat"
        }
    }
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
         <h2> Welcome {this.state.name}</h2><br/>
        
      </div>
    )
  }
}
//props are immutable
//states are immutable
//theyare declared within a constructor

