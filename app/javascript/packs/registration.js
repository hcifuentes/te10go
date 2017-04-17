import React from 'react';
import WebpackerReact from 'webpacker-react'

import { Login } from 'components/registration/login';
import { Signup } from 'components/registration/signup';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Registration extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showLogin: true
    };

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin(e){
    e.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin
    })
  }


  render(){
    return (
      <div>
      {this.state.showLogin ?
        <Login toggleLogin={this.toggleLogin}/> :
        <Signup toggleLogin={this.toggleLogin}/>
      }
      </div>
    );
  }
}
WebpackerReact.setup({Registration});
