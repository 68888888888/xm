
import axios from 'axios';

export default {
	getList(){
		return (dispatch)=>{
			// /psh/Service/callback.mi/PageSubArea/TrailerList.api?t=2019529205636984
			 axios.get(`/psh/Service/callback.mi/PageSubArea/TrailerList.api?t=201953094743136` ).then((res)=>{
			 	console.log(res.data)
			 	dispatch({
			 		type:"GETLIST",
			 		list:res.data.trailers
			 	})
			 	
			 })
		
		}
	},
	getLista(){
		return (dispatch)=>{
			// /psh/Service/callback.mi/PageSubArea/TrailerList.api?t=2019529205636984
			 axios.get(`/psh/Service/callback.mi/TopList/TopListOfAll.api?t=20195301053858493&pageIndex=1` ).then((res)=>{
			 	console.log(res.data)
			 	dispatch({
			 		type:"GETLISTA",
			 		list1:res.data.topLists
			 	})
			 	
			 })
		
		}
	},
		getListb(){
			return (dispatch)=>{
				 axios.get(`/psh/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=201953015115864878` ).then((res)=>{
					 console.log(res.data)
					 dispatch({
						 type:"GETLISTB",
						 list2:res.data
					 })
					 
				 })
			
			}
		}
}