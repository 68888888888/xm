import React, { Component } from 'react';
export default class extends Component {
    constructor(props){
      super(props)
      this.logon = this.logon.bind(this)
    }

    logon(){
      sessionStorage.removeItem('user')
      console.log(this);
      this.props.history.push('/login');
    }
    
  
    render () {
      return (
        <div className = "user">
            <div className = "content">
              
            </div>
        </div>
      )
    }
  }