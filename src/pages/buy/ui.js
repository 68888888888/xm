import React, { Component } from 'react';
import store from '../../store'
export default class extends Component {
  constructor(props){
     super(props)
     this.state={
       imgs:['https://static1.mtime.cn/feature/mobile/banner/2019/0304/naodong750-175.jpg',
            'https://static1.mtime.cn/feature/mobile/banner/2019/0311/hbt750175.jpg']
     }
     store.subscribe(() => {
         console.log('111')
         
     })
     
  }

    
  
  componentDidMount() {
    this.setState({
           
    })
    this.props.getlists()
    this.props.swiper()
  }
    render () {
      
      return (
        <div className = "buy">
          <div className="inp">
            <div className="dingwei">
              深圳 <p>&lt;</p>
            </div>
            <p className='sou'>
              <span className="fa fa-search"></span>
              <input type="text" placeholder='筛选影院'/>
            </p>
            <p className='tijiao'>搜索</p>
          </div>
          <ul className='nav'>
            <li ref='typezhi' onClick={this.props.show.bind(this)}>离我最近</li>
            <li>全城</li>
            <li>影厅特效</li>
          </ul>
          <div ref='type1' onClick={this.props.show.bind(this)} className="type_list">
            <p ref='type2' className='type2' onClick={this.props.types.bind(this,1)}>离我最近</p>
            <p ref='type3' className='type3' onClick={this.props.types.bind(this,2)}>价格最低</p>
          </div>
          
          <div className="banner">
            <div className="swiper-container">
               <div className="swiper-wrapper">
                  {this.state.imgs.map((item,index)=>(
                    <div key={index} className="swiper-slide">
                      <img src={item} alt=""/>
                    </div>
                  ))}
               </div>
               <div className='swiper-pagination'></div>
               <div className='guanggao'>广告</div>
            </div>
          </div>
          <p className="shengming">以下影院均非时光网自营</p>
          <div className="lists">
            {this.props.buyyingyuanlist.map((item,index)=>(
                <div key={index} className='list' onClick={this.props.go.bind(this,item.cinemaId)}>
                    <p className='title'>{item.cinameName}<span>{item.minPrice/100}<u>元起</u></span></p>
                    <p className='dizhi'>{item.address}</p>
                    <p className="typ">
                   
                      {Object.entries(item.feature).map((i,inde)=>{
                        
                        if(i[1]===1){
                          return (
                              
                            <span key={'a'+inde}>
                              
                              
                              {i[0].match(/has(\S*)/)[1]}
                            </span>
                          )
                        }
                          return ''
                      })}
                    </p>
                </div>
                
            ))}
          </div>
        </div>

              



            
          
      )
    }
  }