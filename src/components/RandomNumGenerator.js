import React, { Component, memo } from 'react'

export class RandomNumGenerator extends Component {


    componentDidUpdate(){
        if (this.props.random < 5) {
          throw new Error("Number is less than 5");
        }
      }

  render() {
    return (
      <>
        <h1>Number : {this.props.random}</h1>
        <button onClick={this.props.generate}>Reset</button>
      </>
    )
  }
}

export default memo(RandomNumGenerator)