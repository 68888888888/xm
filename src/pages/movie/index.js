import React, { Component } from 'react';
import axios from 'axios'
import Swiper from '../../../node_modules/swiper/dist/js/swiper.js'
import '../../../node_modules/swiper/dist/css/swiper.min.css'

export default class extends Component {
  constructor(props){
     super(props)
     this.state={
        lists:[],
        length:0
      
     }
     this.getlists=this.getlists.bind(this)
  }
  componentDidMount() {
   this.getlists()
   
   
  }
//   shouldComponentUpdate(nextProps, nextState){
//      if(nextState.lists === this.state.lists){
//         return false
//      }
//      return true
    
//   }
  componentDidUpdate(){
    this.swiper()
   console.log(document.querySelectorAll('.swiper-slide'))
   document.querySelectorAll('.swiper-slide')[1].click()
  }
  swiper () {
   //   var that=this;
      new Swiper('.swiper-container1', {
         freeMode:true,
			slidesPerView : 'auto',
           on:{
               click(){
                    this.setTransition(300)
                    console.log(this.clickedIndex)
                    var el = this.slides[this.clickedIndex];
                    //找到当前元素的位置
                    var elPos = el.offsetLeft +el.offsetWidth/2;
                    //找到当前的容器元素
                    var wrappWidth = el.parentNode.clientWidth;
                    //找到最大的滑动距离
                    var maxDis = this.maxTranslate();
                    //找到最大的位置
                    var maxPos =-maxDis +wrappWidth/2;
                    console.log(maxPos)
                    if(this.clickedIndex===0){
                       console.log(12345)
                       this.setTranslate(0);
                    }else{
                       this.setTranslate(wrappWidth/2-elPos);
                    }
                     
                     
                        // console.log(that)
                        // console.log(el)

               }
           }
      })
   }
  back(){
   this.props.history.goBack()
   console.log(this.state.lists.cinema.name)
  }

   getlists(){
      axios.get('/movie/cinema/showtime.api?t=2019530146546636&cinemaId=8324')
      .then(data=>{
         console.log(data.data.data)
         console.log(this)
         this.setState({
            lists:data.data.data
         })
         
      })
   }
   gaishow(n,m){
      let p=document.querySelectorAll('.ac')
      let p1=document.querySelectorAll('.ac1')
      console.log(p)
      p.forEach(item => {
         item.className='yinying'
      })
      p1.forEach(item => {
         item.className='names'
      })
      this.refs[n].className='ac'
      this.refs[m].className='ac1'
      // this.setState({
      //    length:n
      // })
   }
    render () {
      
      return (
        <div className = "mov">
          <div className='top'>
             <p onClick={this.back.bind(this)}>&lt;</p>
             <p className='fa fa-share-square-o'></p>
          </div>
          <div className="main">
             <div className="left">
                <p className='title'>{this.state.lists.length===0?'':this.state.lists.cinema.name}</p>
                <p className='type'>{this.state.lists.length===0?'':Object.entries(this.state.lists.cinema.feature).map((i,inde)=>{
                        
                  if(i[1]===1){
                    return (  
                      <span key={'b'+inde}>
                        {i[0].match(/has(\S*)/)[1]}
                      </span>
                    )}
                  return ''
               }
                )}
                </p>
             </div>
             <div className="right">
                 <p><img src="https://static1.mtime.cn/html5/20190523161337/images/2014/i_tel_01.png" alt=""/></p>
                 <p><img src="https://static1.mtime.cn/html5/20190530163934/images/2014/i_address_01.png" alt=""/></p>
             </div>
          </div>
          <div className="bann">
            <div className="swiper-container1">
               <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      
                  </div>
                  {this.state.lists.length===0?'':this.state.lists.movies.map((item,index)=>(
                  
                    <div onClick={this.gaishow.bind(this,item.title,item.movieId)}
                     key={'c'+index} 
                     className="swiper-slide">
                      <img src={item.img} alt=""/>
                      <p ref={item.title} className='yinying'></p>
                      <p ref={item.movieId} className='names'>{item.title}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
          {this.state.length}
          11234567
        </div>

              



            
          
      )
    }
  }


// import action from './action';
// import Swiper from '../../../node_modules/swiper/dist/js/swiper.js'
// import '../../../node_modules/swiper/dist/css/swiper.min.css'


       
       
   
     
         
   



