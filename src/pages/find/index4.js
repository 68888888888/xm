import React,{Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux';
import actionCreator from './actionCreator'
import {bindActionCreators} from 'redux' 
const Img = Styled.img`
	max-width:100%;
`
const Ul = Styled.ul`

    width:100%;
	bottom:2rem;
	right:0;
	overflow:auto;
	margin:0; 
	padding:0;
	
	li{
		display:flex;
		 padding-left:1rem;
		 height:6rem;
		border-bottom:1px solid gray;
		flex-direction:column;
		width:100%;
		text-align:left;
		justify-content:center;
		padding-right:1rem;
		width:90%;

		b{
			font-size:1.8rem;
		}
		img{
			height:2rem;
			width:2rem;
			border-radius:2rem;
			vertical-align:middle;
			margin-right:0.5rem;
		}
		  div{
			   padding-top:0.5rem;
			   font-size:1.6rem;
			   span:last-of-type{
				   background:green;
				   color:white;
				   margin-left:0.8rem;
			   }
		   }
        
		
	}

	

}
`
class Food extends Component{
	componentDidMount(){
		this.props.getListb();
	}
	go=()=>{
		this.props.history.go(-1)
	}
  goDetail(id){
		this.props.history.push("/detail2/"+id)

	}
	render(){
		console.log(this.props);
		return <div>
			  
			      <Img src={require('./img/100230.43767720.jpg')} />
				<Ul>
					{
						this.props.food.list2.map((item)=>{
							return <li key={item.id} onClick={this.goDetail.bind(this,item.id)}>
								        
										<b>{item.title}</b>
										<div>
										<img src={item.userImage}/>
										<span>{item.nickname}-评分</span>

										<strong>《{item.relatedObj.title}》</strong>
										<span>{item.rating}</span>
									</div>
									
										
									</li>
						})
					}
				</Ul>
		 </div>
	}
}

export default connect((state)=>state,
	(dispatch)=>bindActionCreators(actionCreator,dispatch))(Food);