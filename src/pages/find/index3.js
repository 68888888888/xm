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
		 height:5rem;
		border-top:1px solid gray;
	    justify-content:space-between;
		// padding-right:1rem;
		align-items:center;
		width:90%;
		  div{
			text-align:left;
		   }
         b:nth-of-type(1){
		   color:back;
		   font-size:1.6rem;
		  font-weight:hold;
      
		   
	   }
	   span:nth-of-type(1){  
		overflow:hidden; 
		text-overflow:ellipsis;  
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;  
		width:80%;
		font-size:1.4rem;
		padding-top:0.6rem;
	   }
	
		
	}

	

}
`
const Ol = Styled.ol`
display:flex;
justify-content:space-around;
height:10rem;
align-items:center;
li{
	display:flex;
	flex-direction:column;
	align-items:center;
  
}
i{
	font-size:2rem;
}
p{
	height:5rem;
	width:5rem;
	border-radius:5rem;
	line-height:5rem;
	text-align:center;
	margin-bottom:0.6rem;
	}

li:nth-of-type(1)	p:nth-of-type(1){
		background:green;
}
li:nth-of-type(2)	p:nth-of-type(1){
	background:red;
}
li:nth-of-type(3)	p:nth-of-type(1){
	background:blue;
}

li:nth-of-type(1)	span:nth-of-type(1){
	color:green;
	font-size:2rem;
}
li:nth-of-type(2)	span:nth-of-type(1){
	color:red;
	font-size:2rem;
}
li:nth-of-type(3)	span:nth-of-type(1){
	color:blue;
	font-size:2rem;
}
`
class Food extends Component{
	componentDidMount(){
		this.props.getLista();
	}
	render(){
		console.log(this.props);
		return <div>
			      <Img src={require('./img/get.ashx.jpg')} />
				  <Ol>
				  <li><p><i className="fa fa-asterisk" aria-hidden="true"></i></p><span>时光Top100</span></li>
                    
					 <li><p><i className="fa fa-bar-chart" aria-hidden="true"></i></p><span>华语Top100</span></li>
				
					  <li><p><i className="fa fa-line-chart" aria-hidden="true"></i></p><span>全球票房榜</span></li>
				  </Ol>
				<Ul>
					{
						this.props.food.list1.map((item)=>{
							return <li key={item.id}>
								        <div>
										<b>{item.topListNameCn}</b>
										<span>{item.summary}</span>
										</div>
										<i className="fa fa-chevron-right" aria-hidden="true"></i>
										
									</li>
						})
					}
				</Ul>
		 </div>
	}
}

export default connect((state)=>state,
	(dispatch)=>bindActionCreators(actionCreator,dispatch))(Food);