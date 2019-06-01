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
   this.getlists(this.props.match.params.mid)
   
   
  }
//   shouldComponentUpdate(nextProps, nextState){
//      if(nextState.lists === this.state.lists){
//         return false
//      }
//      return true
    
//   }
  componentDidUpdate(){
    this.swiper()
    this.swiper1()
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
   swiper1 () {
      //   var that=this;
         new Swiper('.swiper-container2', {
            
            slidesPerView : 'auto',
             
         })
      }
  back(){
   this.props.history.goBack()
   console.log(this.state.lists.cinema.name)
  }

   getlists(n){
      axios.get(`/movie/cinema/showtime.api?t=2019530146546636&cinemaId=${n}`)
      .then(data=>{
         console.log(data.data.data)
         console.log(this)
         this.setState({
            lists:data.data.data
         })
         
      })
   }
   gaishow(n,m,num){
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
      this.refs.jianjie.innerHTML=this.state.lists.movies[num].title
      this.refs.shijian.innerHTML=this.state.lists.movies[num].length+'-'+this.state.lists.movies[num].type
   }
   gais(n){
      console.log(this.refs['t'+n])
      console.log(this)
      console.log(new Date(1559359200))
      for(let i=0;i<this.state.lists.movies[0].showDates.length;i++){
         this.refs['t'+i].className='acp0'
         
      }

      this.refs['t'+n].className='acp'

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
                  
                    <div onClick={this.gaishow.bind(this,item.title,item.movieId,index)}
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
          <div  className="jianjie">
              <p ref='jianjie' className="p1"></p>
              <p ref='shijian' className="p2"></p>
              <p className="p3">&gt;</p>
          </div>
          <div className="riqi">
          <div className="swiper-container2">
               <div className="swiper-wrapper">
                  {this.state.lists.length===0?'':this.state.lists.movies[0].showDates.map((item,index)=>(
                  
                    <div ref={'t'+index}
                    onClick={this.gais.bind(this,index)}
                     key={'d'+index} 
                     className="swiper-slide">
                      {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>
          {this.state.lists.length===0?'':this.state.lists.showtimes[0].list.map((item,index)=>(
             <div className='gp' key={index}>
                <p>{parseInt((item.showDay % (1000 * 60 * 60)) / (1000 * 60)) }:{parseInt((item.showDay % (1000 * 60)) / 1000)}</p>
                <p>{item.versionDesc}/{item.language}<span>{item.hall}</span></p>
                <p>￥{item.price===''?'39':item.price}</p>
                <p>购票</p>
                
             </div>
          ))}
        </div>

              



            
          
      )
    }
  }


// import action from './action';
// import Swiper from '../../../node_modules/swiper/dist/js/swiper.js'
// import '../../../node_modules/swiper/dist/css/swiper.min.css'


       
       
   
     
         
   



