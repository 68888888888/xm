var initState={
	flag:localStorage.set?JSON.parse(localStorage.set).flag:false
}

const reducer = (state=initState,action)=>{
	var newState ={...state};
		if(action.type==="CHANGE"){
			newState.flag=!newState.flag;
		}
		localStorage.set=JSON.stringify(newState);
	return newState;		
}

export default reducer;