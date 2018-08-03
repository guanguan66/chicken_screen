<template>
	<div class="contain">
		<myheader></myheader>
		<div class="Box">
			<div class="boxTop">
				<p>会议设置</p>
				<button class="fanhui"><router-link to="Index" class="loginBtn">返回</router-link></button>
			</div>
			<div class="boxBottom">
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
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
		methods: {
		
		}
	}
</script>
<style lang="less" scoped>
	/*  伪类清除浮动*/
	
	p {
		margin: 0;
	}
	
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
			}
		}
		.Box {
			width: 1426px;
			height: 699px;
			margin: 0 auto;
			margin-top: 139px;
			background: rgba(0, 0, 0, 0.40);
			border: 1px solid rgba(17, 17, 17, 0.50);
			box-sizing: border-box;
			.boxTop {
				width: 100%;
				height: 100px;
				background: rgba(0, 0, 0, 0.40);
				border: 1px solid rgba(17, 17, 17, 0.50);
				box-sizing: border-box;
				position: relative;
				p {
					position: absolute;
					left: 641px;
					width: 145px;
					height: 100px;
					line-height: 100px;
					font-size: 36px;
					margin: 0;
					color: #FFFFFF;
				}
				.fanhui {
					position: absolute;
					top: 27px;
					right: 23px;
					width: 85px;
					height: 46px;
					text-align: center;
					line-height: 46px;
					background: #226DCF;
					border: none;
					a {
						text-decoration: none;
						font-size: 24px;
						color: #FFFFFF;
					}
				}
			}
			.boxBottom {
				width: 100%;
				height: 599px;
				    overflow: auto;
				
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
		.Box {
			width: 90%;
			height: 558px;
			margin: 0 auto;
			margin-top: 139px;
			background: rgba(0, 0, 0, 0.40);
			border: 1px solid rgba(17, 17, 17, 0.50);
			box-sizing: border-box;
			.boxTop {
				width: 100%;
				height: 100px;
				background: rgba(0, 0, 0, 0.40);
				border: 1px solid rgba(17, 17, 17, 0.50);
				box-sizing: border-box;
				position: relative;
				p {
					position: absolute;
					left: 0;
					right: 0;
					width: 145px;
					height: 100px;
					line-height: 100px;
					font-size: 36px;
					margin: 0 auto;
					color: #FFFFFF;
				}
				.fanhui {
					position: absolute;
					top: 27px;
					right: 23px;
					width: 85px;
					height: 46px;
					text-align: center;
					line-height: 46px;
					background: #226DCF;
					border: none;
					a {
						text-decoration: none;
						font-size: 24px;
						color: #FFFFFF;
					}
				}
			}
			.boxBottom {
				width: 100%;
				height: 414px;
				overflow: auto;
			}
		}
	}
	}
</style>