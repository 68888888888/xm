import React, { Component } from 'react';
import axios from "axios"

export default class extends Component {
  constructor(props){
    super(props)
    this.state={
      list4:[],
      list5:[]
    }

  }
  componentWillMount(){
    axios.get("/wu/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20195312140562").then((res)=>{
      console.log(res.data)
       this.setState({
         list4:res.data.ms
      
       })
    })
    axios.get("/psh/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201953122455451159").then((res)=>{
      console.log(res.data)
       this.setState({
         list5:res.data.hotPoints
      
       })
    })
  }
  
    render () {
        let time=new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate();
        let hours=new Date().getHours()+"-"+new Date().getMinutes()+"-"+new Date().getSeconds();
      return (
        <div className = "home">
            <div className = "content">
                <div className="dao">
                    <span><b>北京</b></span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <div className="ren">
                      <span></span><nav> 影片/影院/影人，任你搜</nav>
                    </div>
                </div>
            </div>

            <div className="hua">
                <h2>
                  <b>正在热映（52部）</b>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </h2>
                <ul>
                  {
                    this.state.list4.splice(0,8).map((item)=>{
                      return<li key={item.id}>
                        <span><img src={item.img}/></span>
                        <span> {item.t}</span>
                      </li>
                    })
                  }
                </ul>
            </div>

            <div className="ji">
              <h2>
                  <b>即将上映60部</b>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
              </h2>
              <img src={require('./img/get.ashx.jpg')} />
            </div>
            
            <div className="jin">
                <h2><b>今日热点</b></h2>  
                <ul>
                        {
                          this.state.list5.map((item)=>{
                            return<li key={item.id}>
                              <span><img src={item.img}/></span>
                              <p>
                              <span className="one"> <b>{item.title}</b></span>
                              <span className="two"> {item.desc}</span>
                              <span className="three"> {time}  {hours}</span>
                              </p> 
                            
                            </li>
                          })
                        }
                    </ul>

            </div>

        </div>
     
      )
    }
}
