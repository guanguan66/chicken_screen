<template>
	<div class="contain">
		<myheader></myheader>
		<div class="Box">
			<div class="boxTop">
				<p>与会人员</p>
				<button class="fanhui"><router-link to="Index" class="loginBtn">返回</router-link></button>

			</div>
			<div class="boxBottom">
				<div class="renyuanInput clearfix">
					<input class="renyuanText" v-model="shuru" type="text" name="" id="" value="请输入关键字" />
					<input v-on:click="sousuo" class="renyuanBtn" type="button" value="" />
				</div>
				<ul class="clearfix">
					<li v-for="news in news_list">
						<div>
							<img :src="news.head_img" />
							<span>{{news.g_name}}</span>
							<p>简介：<i>{{news.g_info}}</i></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
	/*引入公共方法*/
	import { guesterInfo } from "../api/user";
	import header from './header.vue'
	import footer from './footer.vue'
	export default {
		components: {
			myheader: header,
			myfooter: footer
		},
		data() {
			return {
				name: '',
				g_name: '',
				head_img: '',
				g_info: '',
				shuru: '',
				news_list: {
					title: '',
					image: '',
					ga_prefix: '',
					type: 0,
					id: 0
				}
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
			/*接口请求*/
			let data = {
				'token': token
			}
			guesterInfo(data).then(res => {
				console.log(res)
				this.news_list = res.data;
			})
		},
		methods: {
			sousuo() {
				if(this.shuru == "") {
					this.$message.error("请输入搜索内容")
				} else {
					let token = sessionStorage.getItem("token");
					this.token = token

					let data = {
						'token': token,
						'name': this.shuru
					}
					/*接口请求*/
					guesterInfo(data).then(res => {
						console.log(res)
						if(res.data == "") {
							this.news_list = res.data;
							this.$message.error("暂无搜索结果")
						} else {
							this.news_list = res.data;
						}
					})
				}

			}
		}
	}
	$("body").keydown(function(event) {
		if(event.keyCode == "13") { //keyCode=13是回车键
			$(".renyuanBtn").click();
		}
	});
</script>
<style lang="less" scoped>
	/*  伪类清除浮动*/
	
	input {
		outline: none;
	}
	
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
				.renyuanInput {
					width: 1200px;
					margin: 0 auto;
					height: 40px;
					line-height: 40px;
					margin-top: 45px;
					.renyuanText {
						width: 369px;
						height: 40px;
						line-height: 40px;
						float: left;
						font-size: 20px;
						background: rgba(0, 0, 0, 0);
						color: #FFFFFF;
						text-indent: 27px;
						border: 1px solid #FFFFFF;
						border-right: none;
					}
					.renyuanBtn {
						width: 54px;
						height: 44px;
						line-height: 44px;
						float: left;
						background: url(../assets/Search.png)no-repeat;
						background-position: 19px;
						border: 1px solid #FFFFFF;
						border-left: none;
					}
				}
				ul {
					width: 1200px;
					margin: 0 auto;
					margin-top: 50px;
					padding: 0;
					li {
						width: 282px;
						height: 417px;
						float: left;
						background: rgba(0, 0, 0, 0.20);
						border: 1px solid #FFFFFF;
						list-style: none;
						margin-right: 16px;
						margin-bottom: 46px;
						div {
							width: 274px;
							height: 408px;
							margin: 0 auto;
							margin-top: 4px;
							border: 1px solid #FFFFFF;
							position: relative;
							img {
								width: 144px;
								height: 144px;
								box-sizing: border-box;
								border-radius: 50%;
								border: 3px solid #fff;
								position: absolute;
								top: 29px;
								left: 0;
								right: 0;
								margin: 0 auto;
							}
							span {
								position: absolute;
								width: 100%;
								text-align: center;
								font-size: 24px;
								color: #FFFFFF;
								top: 194px;
							}
							p {
								position: absolute;
								top: 247px;
								left: 0;
								right: 0;
								width: 225px;
								margin: 0 auto;
								height: 132px;
								overflow: hidden;
								font-size: 16px;
								color: #FFFFFF;
								i {
									font-style: normal;
								}
							}
						}
					}
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
				.renyuanInput {
					width: 950px;
					height: 40px;
					/* margin-left: 6%; */
					line-height: 40px;
					margin: 0 auto;
					margin-top: 15px;
					.renyuanText {
						width: 369px;
						height: 40px;
						line-height: 40px;
						float: left;
						font-size: 20px;
						background: rgba(0, 0, 0, 0);
						color: #FFFFFF;
						text-indent: 27px;
						border: 1px solid #FFFFFF;
						border-right: none;
					}
					.renyuanBtn {
						width: 54px;
						height: 44px;
						line-height: 44px;
						float: left;
						background: url(../assets/Search.png)no-repeat;
						background-position: 19px;
						border: 1px solid #FFFFFF;
						border-left: none;
					}
				}
				ul {
					width: 950px;
					margin: 0 auto;
					margin-top: 26px;
					padding: 0;
					li {
						width: 218px;
						height: 284px;
						float: left;
						background: rgba(0, 0, 0, 0.20);
						border: 1px solid #FFFFFF;
						list-style: none;
						margin-right: 16px;
						margin-bottom: 28px;
						div {
							width: 212px;
							height: 274px;
							margin: 0 auto;
							margin-top: 4px;
							border: 1px solid #FFFFFF;
							position: relative;
							img {
								width: 100px;
								height: 100px;
								box-sizing: border-box;
								border-radius: 50%;
								border: 3px solid #fff;
								position: absolute;
								top: 16px;
								left: 0;
								right: 0;
								margin: 0 auto;
							}
							span {
								position: absolute;
								width: 100%;
								text-align: center;
								font-size: 24px;
								color: #FFFFFF;
								top: 126px;
							}
							p {
								position: absolute;
								top: 162px;
								left: 0;
								right: 0;
								width: 196px;
								margin: 0 auto;
								height: 132px;
								overflow: hidden;
								font-size: 16px;
								color: #FFFFFF;
								i {
									font-style: normal;
								}
							}
						}
					}
				}
			}
		}
	}
	}
</style>