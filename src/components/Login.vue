<template>
	<div class="contain">
		<h1>嘉农会议系统</h1>
		<div class="loginBox">
			<div class="login">
				<img src="../assets/jnlogo.png" alt="" class="logo" />
				<p v-show="showTishi">({{tishi}})</p>
				<span class="userName">用户名</span>
				<input class="userInput" type="text" value="" placeholder="请输入用户名" v-model="username" />
				<span class="passWord">密码</span>
				<input class="passInput" type="password" value="" placeholder="请输入密码" v-model="password" />
				<input v-on:click="login" class="loginBtn" type="button" value="登录" />
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
	//	import { setCookie, getCookie } from '../assets/js/cookie.js'
	import { login } from "../api/user";
	import footer from './footer.vue'
	export default {
		components: {
			myfooter: footer
		},
		data() {
			return {
				showLogin: true,
				showTishi: false,
				tishi: '',
				username: '',
				password: ''
			}
		},
		mounted() {
			var username = sessionStorage.getItem("username");
			if(username == '') {
				this.$router.push('/Index')
			}

			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			//			if(getCookie('username')) {
			//				this.$router.push('/Index')
			//			}
		},
		methods: {
			login() {
				if(this.username == "" || this.password == "") {
					this.$message.error("请输入用户名或密码")
				} else {
					let data = {
						'username': this.username,
						'password': this.password
					}
					login(data).then(res => {
						console.log(res);
						if(res.retcode == -1) {
							this.tishi = res.msg;
							this.showTishi = true
						} else if(res.retcode == 0) {
							this.tishi = res.msg;
							this.showTishi = true
						} else {
							this.tishi = res.msg;
							this.showTishi = true
							//							setCookie('username', this.username, 1000 * 60)
							//							setCookie('token', res.data.token, 1000 * 60)

							var username = sessionStorage.getItem("username");
							var token = localStorage.getItem("token");

							// 说明：数据信息不要存储在cookie里，使用sessionStorage
							sessionStorage.setItem('username', this.username);
							sessionStorage.setItem('token', res.data.token);
							setTimeout(function() {
								this.$router.push('/Index')
							}.bind(this), 200)
						}
					})
					/*接口请求*/
					/* this.$http.post('http://me.jianong.com/api.php/api/index/login',data).then((res)=>{
              console.log(res)              
              if(res.body.retcode == -1){
                  this.tishi = res.body.msg;
                  this.showTishi = true
              }else if(res.body.retcode == 0){
                  this.tishi =  res.body.msg;
                  this.showTishi = true
              }else{
                  this.tishi =  res.body.msg;
                  this.showTishi = true
                  setCookie('username',this.username,1000*60)
                  setCookie('token',res.body.data.token,1000*60)
                  setTimeout(function(){
                      this.$router.push('/Index')
                  }.bind(this),1000)
              }
          }) */
				}
			}
		}
	}
	$("body").keydown(function(event) {
		if(event.keyCode == "13") { //keyCode=13是回车键
			$(".loginBtn").click();
		}
	});
</script>
<style lang="less" scoped>
	el-message--error {
		position: absolute;
		background: rgba(0, 0, 0, .6);
		width: 60%;
		top: 200px;
		left: 0;
		right: 0;
		margin: 0 auto;
		color: #fff;
		text-align: center;
	}
	
	.contain {
		width: 100%;
		min-width: 1480px;
		height: 100%;
		background: url(../assets/bg.png);
		background-size: 100% 100%;
		position: absolute;
		top: 0;
		background-size: 100% 100%;
		bottom: 0;
		left: 0;
		right: 0;
		h1 {
			font-size: 100px;
			color: #FFFFFF;
			width: 100%;
			text-align: center;
		}
		.loginBox {
			width: 713px;
			height: 429px;
			margin: 0 auto;
			background: rgba(0, 0, 0, 0.16);
			.login {
				position: relative;
				top: 21px;
				width: 663px;
				height: 387px;
				margin: 0 auto;
				background: rgba(0, 0, 0, 0.30);
				p {
					font-size: 24px;
					color: #FFFFFF;
					position: absolute;
					top: 273px;
					left: 160px;
				}
				img {
					position: absolute;
					left: 0;
					right: 0;
					margin: 0 auto;
					top: 39px;
				}
				.userName {
					font-size: 30px;
					color: #FFFFFF;
					position: absolute;
					top: 151px;
					left: 42px;
				}
				.passWord {
					font-size: 30px;
					color: #FFFFFF;
					position: absolute;
					top: 151px+73px;
					left: 42px;
				}
				.userInput {
					width: 439px;
					height: 49px;
					background: rgba(255, 255, 255, 0.40);
					position: absolute;
					top: 144px;
					right: 63px;
					border: none;
					font-size: 30px;
					color: #FFFFFF;
					text-indent: 27px;
				}
				.passInput {
					width: 439px;
					height: 49px;
					background: rgba(255, 255, 255, 0.40);
					position: absolute;
					top: 144px+24px+49px;
					right: 63px;
					border: none;
					font-size: 30px;
					color: #FFFFFF;
					text-indent: 27px;
				}
				.loginBtn {
					width: 154px;
					height: 49px;
					text-align: center;
					line-height: 49px;
					position: absolute;
					top: 293px;
					right: 63px;
					border: none;
					background: #226DCF;
					font-size: 24px;
					color: #FFFFFF;
					text-decoration: none;
				}
			}
		}
		footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 70px;
			line-height: 70px;
			background: rgba(0, 0, 0, 0);
			text-align: center;
			font-size: 18px;
			color: #FFFFFF;
			letter-spacing: -0.43px;
		}
	}
	@media screen and (max-width: 1200px) {
		.contain {
		width: 100%;
		min-width: 1200px;
		height: 100%;
		min-height: 768px;
		background: url(../assets/bg.png);
		background-size: 100% 100%;
		position: absolute;
		top: 0;
		background-size: 100% 100%;
		bottom: 0;
		left: 0;
		right: 0;
		h1 {
			font-size: 100px;
			color: #FFFFFF;
			width: 100%;
			min-width: 1200px;
			text-align: center;
		}
		.loginBox {
			width: 713px;
			height: 429px;
			margin: 0 auto;
			background: rgba(0, 0, 0, 0.16);
			.login {
				position: relative;
				top: 21px;
				width: 663px;
				height: 387px;
				margin: 0 auto;
				background: rgba(0, 0, 0, 0.30);
				p {
					font-size: 24px;
					color: #FFFFFF;
					position: absolute;
					top: 273px;
					left: 160px;
				}
				img {
					position: absolute;
					left: 0;
					right: 0;
					margin: 0 auto;
					top: 39px;
				}
				.userName {
					font-size: 30px;
					color: #FFFFFF;
					position: absolute;
					top: 151px;
					left: 42px;
				}
				.passWord {
					font-size: 30px;
					color: #FFFFFF;
					position: absolute;
					top: 151px+73px;
					left: 42px;
				}
				.userInput {
					width: 439px;
					height: 49px;
					background: rgba(255, 255, 255, 0.40);
					position: absolute;
					top: 144px;
					right: 63px;
					border: none;
					font-size: 30px;
					color: #FFFFFF;
					text-indent: 27px;
				}
				.passInput {
					width: 439px;
					height: 49px;
					background: rgba(255, 255, 255, 0.40);
					position: absolute;
					top: 144px+24px+49px;
					right: 63px;
					border: none;
					font-size: 30px;
					color: #FFFFFF;
					text-indent: 27px;
				}
				.loginBtn {
					width: 154px;
					height: 49px;
					text-align: center;
					line-height: 49px;
					position: absolute;
					top: 293px;
					right: 63px;
					border: none;
					background: #226DCF;
					font-size: 24px;
					color: #FFFFFF;
					text-decoration: none;
				}
			}
		}
	}
	}
</style>