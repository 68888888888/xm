var initState={
	list:[]
}

const reducer =(state=initState,action)=>{
	 var newState ={...state};
	 if(action.type==="GETFOOD"){
	 	console.log(action.list)
	 	newState.list=action.list;
	 }
	 return newState;
}

export default reducer;