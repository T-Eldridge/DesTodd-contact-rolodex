import React, { Component } from 'react';
import DetailsComp from './DetailsComp';

class DisplayUsers extends Component {
  render() {

    const{name, picture} = this.props.user;
    return(
        <div>
        <img src={picture.large} alt='pic'/>
        <h1>{name.first} {name.last}</h1>
        <DetailsComp location={this.props.user.location} 
        phone={this.props.user.phone} 
        email={this.props.user.email}/>
        </div>
    )

}
}

export default DisplayUsers;
