import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

export default class AuthRouter extends Component{
  constructor(props){
    super(props)
    return 
  }
  render(){
    let { component:Com } = this.props
    return (
      <Route path={this.props.path} render={(props)=>{
        return sessionStorage.getItem('user') ? <Com {...props} /> : <Redirect to='/login' />
      }} />
    )
  }
}

