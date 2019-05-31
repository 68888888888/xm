import React,{Component} from 'react'
import {Switch} from 'antd-mobile'
import {connect} from 'react-redux';
import actionCreator from './actionCreator'
import {bindActionCreators} from 'redux'
class Setting extends Component{
	render(){
	
		return <div><Switch checked={this.props.setting.flag} onChange={this.props.change} /></div>
	}
}

export default connect((state)=>state,
	(dispatch)=>bindActionCreators(actionCreator,dispatch))(Setting);