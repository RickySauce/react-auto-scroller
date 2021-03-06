import React, { Component } from 'react';
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

class ScrollerArrows extends Component {

  state = {
    direction: ``,
    visibility: ``
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({direction: this.setDirection(), visibility: this.setVisibility()})
    }
  }

  setDirection = () => {
    if (this.props.scroller > 0 || (this.props.direction === 'right' && this.props.touched)){
      return `right`
    } else if (this.props.scroller < 0 || (this.props.direction === 'left' && this.props.touched)){
      return `left`
    } else {
      return ``
    }
  }

  setVisibility = () => {
    if(!this.props.scroll && (this.props.scroller > 0 || this.props.scroller < 0)){
      return `hide`
    } else {
      return ``
    }
  }

  concatClassNames = () => {
    return this.props.className + ` ` + this.state.direction + ` ` + this.state.visibility
  }

  render(){
      return (
          <React.Fragment>
            <TiChevronLeft
            id='arrow-left' className={this.concatClassNames()}
            />
            <TiChevronRight
            id='arrow-right' className={this.concatClassNames()}
            />
          </React.Fragment>
      )
    }
};

ScrollerArrows.defaultProps = {
  className: 'scroller-arrows'
}

export default ScrollerArrows
