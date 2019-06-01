import React, { Component } from 'react';
import axios from 'axios'
import {Switch,Route,NavLink,WithRouter,Redirect} from 'react-router-dom'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      repassword: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.register = this.register.bind(this);
  }

  inputChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  gohome(){
    console.log(this)
     this.props.history.push('/home')
  }

  register(){
    if(this.state.username === '' || this.state.password === '' || this.state.repassword === '') return;
    if(this.state.password !== this.state.repassword){
      alert('两次输入的密码不一致');
      return;
    }
    let sendObj ={
      username: this.state.username,
      password: this.state.repassword
    }
    axios.post('/api/register', sendObj).then(res=>{
      switch(res.data.ret){
        case 0:
          alert(res.data.username+'已注册成功！请登录');
          this.props.history.push('/login');
        break;
        case 1:
          alert('已存在该用户');
        break;
      }
    })
  }
    
  
    render () {
      return (
        <div className = "zu">
            <div className = "content">
            <div className = "fan">
              <span onClick={this.gohome.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i>  </span>  
                <span className="logo" onClick={this.gohome.bind(this)}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAABQCAYAAAAuolgGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTI5N0ZFM0Y2RjJGMTFFNjk3MDJBQzYzQUQ4RTdFODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTI5N0ZFNDA2RjJGMTFFNjk3MDJBQzYzQUQ4RTdFODMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Mjk3RkUzRDZGMkYxMUU2OTcwMkFDNjNBRDhFN0U4MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1Mjk3RkUzRTZGMkYxMUU2OTcwMkFDNjNBRDhFN0U4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgA40h8AAA5zSURBVHja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" alt=""/>
                </span>
              </div>
            </div>

            <div className="regist">
                <ul className="regist_list">
                  <li>
                    <label htmlFor='username'>手机号&nbsp;：</label>
                    <input type='text' value={this.state.username} id='username' onChange={this.inputChange} name="mobile" placeholder="请输入手机号" />
                  </li>
                  <li>
                    <label htmlFor='password'>密&nbsp;&nbsp;码: </label>
                    <input type='password' value={this.state.password} id='password' onChange={this.inputChange} placeholder="6-20位字母、数字、符号组成" />
                  </li>
                  <li>
                    <label htmlFor='repassword'>确认密码：</label>
                    <input type='password' value={this.state.repassword} id='repassword' onChange={this.inputChange} />
                  </li>
                </ul>
            </div>

            <div className="agree">
                <i></i>
                <b>
                <span className="tong"> 我已阅读并同意</span>
                <span className="yi">《Mtime时光网服务条款》</span>
                <span className="le">《隐私政策》</span>
                </b>
            </div>

            <button onClick={this.register}>注册</button>

            <footer>
              <div className="nav">
                    <NavLink to = "/home" >首页</NavLink>
                    <NavLink to = "/buy" >购票</NavLink>
                    <NavLink to = "/shop" >商城</NavLink>
                    <NavLink to = "/find" >发现</NavLink>
                    <NavLink to = "/user" >我的</NavLink> 
              </div>
              <div className="bottom">
                <ul>
                  <li><a href="http://www.mtime.com/rdtopc"><span>PC版</span></a></li>
                  <li>客户端下载</li>
                  <li>意见反馈</li>
                  <li>帮助中心</li>
                </ul>
                <div className='tu'>
                    <p><img src="https://static1.mtime.cn/html5/20190523161337/images/2014/fot_logo.png" alt=""/></p>
                    <p>
                    <a href="https://feature.mtime.cn/mobile/2018/licence/licence.html" className="honest">
                        <img src="https://static1.mtime.cn/html5/20190523161337/images/h_mark.jpg" alt=""/>
                      </a>
                      </p>
                </div>
                <p className='zi'>Copyright 2006-2019  Mtime.com Inc. All rights reserved.</p>
              </div>
            </footer>
        </div>
      )
    }
  }