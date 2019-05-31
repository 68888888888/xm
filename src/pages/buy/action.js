import axios from 'axios'
const action={
    getlists:(n)=>(dispatch)=>{
        let tim=Date.now()
        // let id=this.props
        // console.log(n)
        axios.get(`/ying/api/proxy/ticket/onlineCinemasByCity.api?locationId=${n}&_=${tim}`)
        .then(data=>{
            console.log(data.data.data.cinemaList)
            dispatch({
                type: 'HOME_YINGYUAN_LIST',
                data: data.data.data.cinemaList
            })
            
        })
    },
    gai:(n)=>(dispatch)=>{
        dispatch({
            type: 'HOME_YINGYUAN_LIST',
            data: n
        })
    }
}

export default action;