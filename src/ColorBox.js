import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {/* your conditional code here! */}
        let opa = this.props.opacity;
        if(opa> 2.0)
      </div>
    )
  }

}
