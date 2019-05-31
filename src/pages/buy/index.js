import { connect } from 'react-redux';
import ui from './ui';
import action from './action';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.js'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
  const mapStateToProps=(state)=>{
    return {
       
       buyyingyuanlist:state.buy.buyyingyuanlist,
    }
}
const mapDispatchToProps=(dispatch)=>{
   return {
       go(id){
           this.props.history.push(`/movie/${id}`)
       },
       show(){
        //    console.log(this.refs.typezhi.innerHTML)
           if(this.refs.type1.style.display==='none'){
            this.refs.type1.style.display='block'
            this.refs.typezhi.style.color='#f97d3f'
           }else{
            this.refs.type1.style.display='none';
            this.refs.typezhi.style.color='#777'
           }
           
       },
       types(n){
           if(n===1){
            this.refs.typezhi.innerHTML=this.refs.type2.innerHTML
            console.log(this)
            this.refs.type2.style.color='#f97d3f'
            this.refs.type3.style.color='#777'
            dispatch(action.getlists(this.props.match.params.hehe))
           }else{
            this.refs.typezhi.innerHTML=this.refs.type3.innerHTML
            this.refs.type3.style.color='#f97d3f'
            this.refs.type2.style.color='#777'
            let arr=this.props.buyyingyuanlist
            arr.sort(function(m,n){
                if (m.minPrice < n.minPrice) return -1
                else if (m.minPrice > n.minPrice) return 1
                else return 0
            })
            dispatch(action.gai(arr))
        //    console.log(arr)
           }
           
           console.log(this.props.buyyingyuanlist)
        //    this.props.buyyingyuanlist.forEach(item => {
        //       arr.push(item.ratingFinal) 
        //    })
        
       },
    swiper () {
        new Swiper('.swiper-container', {
           
           loop: true,
        //    effect:'fade',
           pagination : {
               el: '.swiper-pagination',
           },
           autoplay: {
               delay: 3000,
               stopOnLastSlide: false,
               disableOnInteraction: false,
           },
          
   
   
     })
   },
       getlists(){
           dispatch(action.getlists(this.match.params.hehe))
           console.log(this)
       },
       
   }
       
//          
   

}

const Com = connect(mapStateToProps, mapDispatchToProps)(ui);
export default Com;