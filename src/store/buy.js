const reducer=(state={
    buyyingyuanlist:[],
},{type,data})=>{
    switch(type){
        case 'HOME_YINGYUAN_LIST':
        const buyyingyuanlist={ buyyingyuanlist:data };
        return {...state,...buyyingyuanlist}
        default :
        return state;
    }
}
export default reducer;