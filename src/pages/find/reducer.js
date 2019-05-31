var initState={
	list:[],
	list1:[],
    list2:[]
}

const reducer =(state=initState,action)=>{
	 var newState ={...state};
	 if(action.type==="GETLIST"){
	 	newState.list=action.list;
	 }
	 if(action.type==="GETLISTA"){
		newState.list1=action.list1;
	}
	if(action.type==="GETLISTB"){
		newState.list2=action.list2;
	}
	 return newState;
}

export default reducer;