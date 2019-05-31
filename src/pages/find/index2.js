import React,{Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux';
import actionCreator from './actionCreator'
import {bindActionCreators} from 'redux' 
const sc=25;
const Img = Styled.img`
	max-width:100%;
`
const Ul = Styled.ul`

    width:100%;
	top:${250/sc}rem;
	bottom:2rem;
	left:${10/sc}rem;
	right:0;
	overflow:auto;
	margin:0;
	padding:0;
	li{
		display:flex;
		flex:1;
		margin-top:1rem;
		span:nth-of-type(2){
		   margin-left:0.9rem;
		   font-size:2rem;
           text-align:left;
		}
		img{
			margin-left:1rem;
			display:block;
		   
		}
	}

	

}
`
class Food extends Component{
	componentDidMount(){
		this.props.getList();
	}
	render(){
		console.log(this.props);
		return <div>
			      <Img src={require('./img/100230.43767720.jpg')} />
				<Ul>
					{
						this.props.food.list.map((item)=>{
							return <li key={item.id}>
										
										<span><img src={item.coverImg} /></span>
                                    
										<span>{item.movieName}</span>
									</li>
						})
					}
				</Ul>
		 </div>
	}
}

export default connect((state)=>state,
	(dispatch)=>bindActionCreators(actionCreator,dispatch))(Food);