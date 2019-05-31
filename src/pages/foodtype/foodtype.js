import React,{Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux';
import actionCreator from './actionCreator'
import {bindActionCreators} from 'redux' 
import {Button} from 'antd-mobile'
const sc=25;
const Img = Styled.img`
	max-width:100%;
`
const Ul = Styled.ul`

    width:100%;
	position:fixed;
	top:${47/sc}rem;
	bottom:2rem;
	left:${10/sc}rem;
	right:0;
	overflow:auto;
	li{
		
		display:flex;
		
		img{
			width:20%;
			height:${100/sc}rem;
			margin-right:${20/sc}rem;
		}
	}
	
`

class FoodType extends Component{
	componentDidMount(){
		this.props.getFood();
	}
	go=()=>{
		this.props.history.go(-1);
	}
	goDetail(id){
		this.props.history.push("/detail/"+id);
	}
	render(){
		console.log(this.props);
		return <div>
				<Button style={{textAlign:"left",paddingLeft:'10px'}} onClick={this.go}>返回</Button>
				<Ul>
					{
						this.props.foodtype.list.map((item)=>{
							return <li key={item.id} onClick={this.goDetail.bind(this,item.id)}>
										
										<img src={item.imgUrl} />
										<div>
										<h3>{item.title}</h3>
										<p>{item.desc}</p>
										</div>
									</li>
						})
					}
				</Ul>
		 </div>
	}
}

export default connect((state)=>state,
	(dispatch)=>bindActionCreators(actionCreator,dispatch))(FoodType);