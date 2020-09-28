import React, { Component } from 'react';

class DetailsComp extends Component {

  state = {
    isHidden: true
  }

 Switch = () => {
   this.setState({isHidden: this.state.isHidden === true ? false : true})
 }
  render() {

    if (this.state.isHidden){
     return (
       <button onClick={this.Switch}>More Info</button>
     )
    }else{

      return(
          <li onClick={this.Switch}>
          <p>Phone: {this.props.phone}</p>
          <p>Email: {this.props.email}</p>
          <p>City: {this.props.location.city}</p>
          <p>State: {this.props.location.state}</p>
          
          </li>
      )

    }



}
}

export default DetailsComp;