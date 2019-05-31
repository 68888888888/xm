import React,{Component} from 'react'
import Styled from 'styled-components'
import Index1 from './index1'
import Index2 from './index2'
import Index3 from './index3'
import Index4 from './index4'
import Detail2 from '../detail2/detail';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
import {connect} from 'react-redux';
const P = Styled.p` 
  display:flex;
  justify-content:space-around; 
  height:3rem;
  align-items:center;
	font-size:2rem;
  a:hover{
		color:blue;
		font-weight:bold;
  }

`
class Food extends Component{
	render(){
		return(
		   <Router>
		     <div>
				<P>
			    <NavLink to="/index/index1">新闻</NavLink>
				<NavLink to="/index/index2">预告片</NavLink>
				<NavLink to="/index/index3">排行榜</NavLink>
				<NavLink to="/index/index4">影评</NavLink>
			</P>
			   <Switch>
		        <Route exact path="/index/index1" component={Index1}/>
						<Route path='/detail2/:id' component={Detail2}></Route>
				<Route exact path="/index/index2" component={Index2}/>
				<Route exact path="/index/index3" component={Index3}/>
				<Route exact path="/index/index4" component={Index4}/>
				</Switch>
			    
				
		 </div>
		 </Router>
		 )

	}
}

export default connect((state)=>state)(Food) ;
