import React, { Component } from 'react';
import axios from 'axios'

export default class extends Component {
  constructor(props){
    super(props)
    this.state={
      list6:[]
    }
  }

  componentWillMount(){
    axios.get("").then((res)=>{
      
    })
  }
    
  
    render () {
      return (
        <div className = "shop">
            <div className = "content">
              商城
            </div>
        </div>
      )
    }
  }