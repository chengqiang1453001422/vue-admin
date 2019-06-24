<template>
  <div class="Login">
        <div class="LoginCon">
			<div class="LoginConLeft">
				<div class="Headline">恒立科技软件管理系统</div>
			</div>
			<div class="LoginConRight">
			  <div class="LoginName">欢迎登陆</div>
				<div class="InputItem">
					<span class="iconfont iconwode"></span>
					<input type="text" placeholder="请输入用户名" autocomplete="off"/>
				</div>
				<div class="InputItem">
					<span class="iconfont iconbuoumaotubiao32"></span>
					<input type="text" placeholder="请输入密码" autocomplete="off"/>
				</div>
				<div class="InputItem">
					<span class="iconfont iconanquanzhongxinoff"></span>
					<input type="text" placeholder="请输入验证码"/>
					<img src='../assets/img/card.png' class="card" alt="验证码" />
				</div>
				<button class="LoginBtn" @click="toLogin">登陆系统</button>
			</div>
        </div>
      </div>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
    }
  },
  methods: {
    toLogin() {
      var user = {
        name:'admin',
        avatar:'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png' 
      };
      sessionStorage.setItem('user', JSON.stringify(user));
      this.$router.push({ path: '/main/home' });
    }
  }
}
</script>
<style>
  .Login{
    width: 100%;
    height:100%;
    background-image: url(../assets/img/login-bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LoginCon{
    width:60%;
    height:400px;
    border-radius:5px;
    display: flex;
    align-items: center;
  }
  .LoginConLeft{
    flex:0 0 40%;
    height: 100%;
    background-image: url(../assets/img/login-left-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .Headline{
    padding-top:40px;
    text-align: center;
    font-size:24px;
    color:#fff;
  }
  .LoginConRight{
    flex:0 0 60%;
    height: 100%;
    background-color:#fff;
    padding:6% 10%;
  }
  .LoginName{
    text-align: center;
    font-size:24px;
    color:#393f4d;
    margin-bottom: 20px;
  }
  .InputItem{
    margin:0px auto;
    padding:10px;
    border-bottom:1px solid #ddd;
  }
  .InputItem input{
    padding:8px;
    border:0px;
  }
  .card{
    width:100px;
    height:40px;
    display: inline-block;
    vertical-align: middle;
    cursor:pointer;
  }
  .LoginBtn{
    height:40px;
    width:100%;
    border:1px solid #6b85fe;
    line-height: 40px;
    text-align: center;
    background-color:#6b85fe;
    color:#fff;
    box-shadow: none;
    cursor:pointer;
    margin-top:15px;
  }
  .LoginBtn:enabled:active{
    opacity: 0.96;
  }
</style>