import React,{Component} from 'react'
class Detail extends Component{
	go=()=>{
		this.props.history.go(-1);
	}
	render(){
		return <div>{this.props.match.params.id}
			<button onClick={this.go}>返回</button>
		</div>
	}
}

export default Detail