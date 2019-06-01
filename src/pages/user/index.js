import React, { Component } from 'react';
export default class extends Component {
    constructor(props){
      super(props)
      this.logon = this.logon.bind(this)
    }

    logon(){
      sessionStorage.removeItem('user')
      console.log(this);
      this.props.history.push('/login');
    }
    
  
    render () {
      return (
        <div className = "user">
            <div className = "content">
                <ul className="hd">
                    <li>
                      <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&width=100&height=100&clipType=4" />
                    </li>
                    <li className="many">
                      <span className="mo">MO</span>
                      <span className="re">热情的张逸群</span>
                      <p><b>余额：¥0</b></p>
                    </li>
                </ul>
            </div>
            <div className="mai">
                <ul>
                <li>
                    <p className="one"></p>
                    <span>购物车</span>
                  </li>
                  <li>
                    <p className="two"></p>
                    <span>电影票订单</span>
                  </li>
                  <li>
                    <p className="three"></p>
                    <span>商品订单</span>
                  </li>
                </ul>
            </div>
            <div className="wan">
                <ul>
                  <li>
                    <i className="dian"></i>
                    <span><b>电影票优惠券</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <i className="shang"></i>
                    <span><b>商品优惠券</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <i className="huo"></i>
                    <span><b>我的活动</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <i className="dong"></i>
                    <span><b>我的电影</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <i className="shou"></i>
                    <span><b>我的收藏</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                </ul>
            </div>
             <div className="wan">
               <ul>
                <li className="te">
                    <span><b>意见反馈</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <span><b>商城使用帮助</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                  <li>
                    <span><b>购票使用帮助</b></span>
                    <p><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                  </li>
                </ul>
              </div>
              <button onClick={this.logon}>退出登录</button>
        </div>
      )
    }
  }