import React from 'react'
import App from './App'


class Authentication extends React.Component{
  state={

    User:{
      "id": "4321",
      "username": "Conkeldurr",
      "lastevent": "Messu1"
    }
  }
  
  render(){
    return(
      <React.Fragment>
        <App UserId={this.state.User.id} />
      </React.Fragment>
    );
  }
}

export default Authentication