<template>
	<div class="contain">
		<myheader></myheader>
		<ul>
			<li>
				<router-link to="Information" class="Information">
					<img src="../assets/Information.png" alt="" />
					<p>会议信息</p>
				</router-link>
			</li>
			<li>
				<router-link to="Agenda" class="Agenda">
					<img src="../assets/Agenda.png" alt="" />
					<p>会议议程</p>
				</router-link>
			</li>
			<li>
				<router-link to="Meetingdata" class="Meetingdata">
					<img src="../assets/Meetingdata.png" alt="" />
					<p>会议资料</p>
				</router-link>
			</li>
			<li>
				<router-link to="Personnel" class="Personnel">
					<img src="../assets/Personnel.png" alt="" />
					<p>与会人员</p>
				</router-link>
			</li>
			<li>
				<router-link to="Signin" class="qiandao">
					<img src="../assets/Signin.png" alt="" />
					<p>会议签到</p>
				</router-link>
			</li>
			<li>
				<router-link to="Luckydraw" class="Luckydraw">
					<img src="../assets/Luckydraw.png" alt="" />
					<p>会议抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="Service" class="Service">
					<img src="../assets/Service.png" alt="" />
					<p>会议服务</p>
				</router-link>
			</li>
			<li>
				<router-link to="Setup" class="Setup">
					<img src="../assets/Setup.png" alt="" />
					<p>设置</p>
				</router-link>
			</li>
		</ul>
		<myfooter></myfooter>
	</div>
</template>

<script>
	/*引入公共方法*/
	//	import { setCookie, getCookie, delCookie } from '../assets/js/cookie.js'
	import header from './header.vue'
	import footer from './footer.vue'
	export default {
		components: {
			myheader: header,
			myfooter: footer
		},
		data() {
			return {
				name: ''
			}
		},
		mounted() {
			/*页面挂载获取保存的session值，渲染到页面上*/
			let uname = sessionStorage.getItem("username");
			this.name = uname
			let token = sessionStorage.getItem("token");
			this.token = token

			/*如果session不存在，则跳转到登录页*/

			if(uname == null) {
				this.$router.push('/')
			}
		},

	}
</script>
<style lang="less" scoped>
	.clearfix:after {
		content: '.';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	.contain {
		width: 100%;
		min-width: 1480px;
		height: 100%;
		background-image: radial-gradient(50% 126%, #309CFF 26%, #050434 100%);
		position: absolute;
		top: 0;
		background-size: 100% 100%;
		bottom: 0;
		left: 0;
		right: 0;
		header {
			background: rgba(0, 0, 0, 0.10);
			width: 100%;
			height: 100px;
			position: absolute;
			top: 0;
			img {
				position: absolute;
				left: 72px;
				top: 29px;
				width: 62px;
				height: 39px;
			}
			span {
				position: absolute;
				left: 157px;
				font-size: 36px;
				color: #FFFFFF;
				display: inline-block;
				width: 217px;
				height: 50px;
				line-height: 50px;
				top: 23px;
			}
			.back {
				position: absolute;
				font-size: 24px;
				color: #FFFFFF;
				width: 48px;
				height: 33px;
				line-height: 33px;
				top: 35px;
				right: 73px;
				cursor: pointer;
			}
		}
		ul {
			width: 1480px;
			margin: 0 auto;
			margin-top: 107px;
			li {
				float: left;
				list-style: none;
				width: 297px;
				height: 318px;
				background: rgba(0, 0, 0, 0.10);
				border: 1px solid rgba(17, 17, 17, 0.50);
				box-sizing: border-box;
				margin-left: 43px;
				margin-top: 44px;
				a {
					text-decoration: none;
				}
				img {
					width: 120px;
					height: 120px;
					margin-top: 80px;
					margin-left: 88px;
				}
				p {
					width: 100%;
					text-align: center;
					font-size: 30px;
					color: #FFFFFF;
				}
			}
		}
		footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 70px;
			line-height: 70px;
			background: rgba(0, 0, 0, 0.10);
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
			background-image: radial-gradient(50% 126%, #309CFF 26%, #050434 100%);
			position: absolute;
			top: 0;
			background-size: 100% 100%;
			bottom: 0;
			left: 0;
			right: 0;
			header {
				background: rgba(0, 0, 0, 0.10);
				width: 100%;
				height: 100px;
				position: absolute;
				top: 0;
				img {
					position: absolute;
					left: 72px;
					top: 29px;
					width: 62px;
					height: 39px;
				}
				span {
					position: absolute;
					left: 157px;
					font-size: 36px;
					color: #FFFFFF;
					display: inline-block;
					width: 217px;
					height: 50px;
					line-height: 50px;
					top: 23px;
				}
				.back {
					position: absolute;
					font-size: 24px;
					color: #FFFFFF;
					width: 48px;
					height: 33px;
					line-height: 33px;
					top: 35px;
					right: 73px;
					cursor: pointer;
				}
			}
			ul {
				width: 1200px;
				margin: 0 auto;
				margin-top: 107px;
				li {
					float: left;
					list-style: none;
					width: 220px;
					height: 220px;
					background: rgba(0, 0, 0, 0.10);
					border: 1px solid rgba(17, 17, 17, 0.50);
					box-sizing: border-box;
					margin-left: 43px;
					margin-top: 44px;
					a {
						text-decoration: none;
					}
					img {
						width: 80px;
						height: 80px;
						margin-top: 40px;
						margin-left: 70px;
					}
					p {
						width: 100%;
						text-align: center;
						font-size: 30px;
						color: #FFFFFF;
					}
				}
			}
			footer {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 70px;
				line-height: 70px;
				background: rgba(0, 0, 0, 0.10);
				text-align: center;
				font-size: 18px;
				color: #FFFFFF;
				letter-spacing: -0.43px;
			}
		}
	}
</style>