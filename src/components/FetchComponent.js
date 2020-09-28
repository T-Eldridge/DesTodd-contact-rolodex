
import React, {Component} from 'react';
import DisplayUsers from './DisplayUsers';





class FetchComponent extends Component {
    state = {
        users: []
    }

    fetchUser=() => {
        fetch('https://randomuser.me/api?results=25')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            this.setState({users: data.results});
        })  
    }


    render() { 
        return (
            <div>
           <button onClick={this.fetchUser}>Gimme Stuff</button>
           {this.state.users.map((user) => {return <DisplayUsers key={user.phone} user={user}/>})}
           </div>
          );
    }
}
 
export default FetchComponent;


