
import axios from 'axios';

export default {
	getFood(){
		return (dispatch)=>{
			 axios.get("http://localhost:5000/trailers").then((res)=>{
			 	console.log(res.data.data.list)
			 	dispatch({
			 		type:"GETFOOD",
			 		list:res.data.data.list
			 	})
			 	
			 })
		}
	}
}