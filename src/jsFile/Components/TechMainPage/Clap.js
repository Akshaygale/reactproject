import React, { Component } from 'react'

export class Clap extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 4,
        };
      }
    
      ClapLike = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
    render() {
        return (
            <div className='clapbox'>
                <img className='shareImage' src='./Images/share.png' alt='share'></img>
                <img className='clapImage' onClick={this.ClapLike} src='./Images/clap.png' alt='clapImage'></img>
                <div className='countClap'>{this.state.clicks }</div>
            </div>
        )
    }
}

export default Clap
