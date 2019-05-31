import React,{Component} from 'react'
import {connect} from "react-redux"
class Detail2 extends Component{
	go=()=>{
		this.props.history.go(-1);
	}
	render(){
		return <div>{this.props.match.params.id}
			<button onClick={this.go}>返回</button>
		</div>
	}
}

export default connect((state)=>state)(Detail2)