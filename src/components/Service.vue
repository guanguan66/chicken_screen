<template>
	<div class="contain">
		<myheader></myheader>
		<div class="Box">
			<div class="boxTop">
				<p>会议服务</p>
				<button class="fanhui"><router-link to="Index" class="loginBtn">返回</router-link></button>

			</div>
			<div class="boxBottom">
				<ul id="Nav">
					<li @click='getDataId(11)'>
						<img src="../assets/tea.png" alt="" />
						<span>茶水</span>
					</li>
					<li @click='getDataId(22)'>
						<img src="../assets/pen.png" alt="" />
						<span>笔</span>
					</li>
					<li @click='getDataId(33)'>
						<img src="../assets/paper.png" alt="" />
						<span>纸</span>
					</li>
					<li @click='getDataId(44)'>
						<img src="../assets/huatong.png" alt="" />
						<span>话筒</span>
					</li>
					<li @click='getDataId(55)'>
						<img src="../assets/ren.png" alt="" />
						<span>工作人员</span>
					</li>
				</ul>
				<div class="fuwuInput clearfix">
					<input v-model="shuru" class="shuru" type="text" placeholder="请输入您的需求" />
					<input v-on:click="tijiao" class="tijiao" type="button" value="提交" />
				</div>
				<div class="fuwuInfo">
					<h4>历史服务</h4>
					<ul class="clearfix">
						<li v-for="news in news_list">
							<span class="Time">{{news.createtime}}</span>
							<span class="service">{{news.content}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
	/*引入公共方法*/
	import { serviceLists } from "../api/user";
	import { serviceAdd } from "../api/user";
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
				createtime: '',
				content: '',
				id: '',
				aaa: '',
				shuru: '',
				news_list: {
					title: '',
					image: "",
					ga_prefix: '',
					type: 0,
					id: 0
				}
			}
		},

		mounted() {
			$(function() {

				$("#Nav > li >img").click(function() {
					$("li>img[class='active']").removeAttr("class");
					$(this).addClass("active");
				});
			})
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
			serviceLists(data).then(res => {
				console.log(res)

				this.news_list = res.data;

			})
		},
		methods: {
			getDataId(id) {
				sessionStorage.setItem('aaa', id);
			},
			tijiao() {
				let b = sessionStorage.getItem('aaa')
				this.b = b
				let token = sessionStorage.getItem('token')
				this.token = token
				if($("#Nav>li>img").hasClass("active")) {

					if(this.shuru == "") {
						this.$message.error("请输入需求内容")
					} else {

						let data = {
							'token': token,
							'content': this.shuru,
							'type': b
						}
						/*接口请求*/

						serviceAdd(data).then(res => {
							console.log(res)

							this.news_list = res.data;
							$("li>img[class='active']").removeAttr("class")
							this.$message({
								message: '提交成功',
								type: 'success'
							});
						})
					}
				} else {
					this.$message.error("请在上面选择服务")
				}

			}

		}
	}
	$("body").keydown(function(event) {
		if(event.keyCode == "13") { //keyCode=13是回车键
			$(".tijiao").click();
		}
	});
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
				ul {
					width: 1170px;
					margin: 0 auto;
					margin-top: 53px;
					li {
						display: inline-block;
						width: 97px;
						margin-left: 68px;
						.imgimg {
							width: 95px;
							height: 95px;
							border: none;
							border-radius: 50%;
							box-sizing: border-box;
						}
						.active {
							width: 95px;
							height: 95px;
							border: 3px solid #fff;
							border-radius: 50%;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							font-size: 20px;
							margin-top: 12px;
							color: #FFFFFF;
							width: 100%;
							text-align: center;
						}
					}
				}
				.fuwuInput {
					width: 1170px;
					margin: 0 auto;
					margin-top: 47px;
					.shuru {
						width: 1170px-95px;
						height: 70px;
						border: 0;
						background: rgba(0, 0, 0, 0.20);
						color: #fff;
						font-size: 20px;
						color: #FFFFFF;
						line-height: 70px;
						float: left;
						text-indent: 34px;
						box-sizing: border-box;
					}
					.tijiao {
						background: #226DCF;
						width: 95px;
						height: 70px;
						line-height: 70px;
						text-align: center;
						color: #fff;
						border: none;
						float: left;
					}
				}
				.fuwuInfo {
					width: 1170px;
					height: 225px;
					overflow: auto;
					background: rgba(0, 0, 0, 0.20);
					margin: 0 auto;
					margin-top: 19px;
					h4 {
						margin-top: 23px;
						margin-left: 34px;
						font-size: 20px;
						color: #FFFFFF;
						width: 140px;
						height: 25px;
						line-height: 25px;
						font-weight: 100;
					}
					ul {
						width: 1100px;
						margin: 0 auto;
						padding: 0;
						li {
							width: 100%;
							height: 25px;
							line-height: 25px;
							margin: 0;
							margin-top: 5px;
							float: left;
							span {
								float: left;
								margin: 0;
							}
							.Time {
								width: 200px;
							}
							.service {
								width: 200px;
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
				ul {
					width: 1000px;
					margin: 0 auto;
					margin-top: 53px;
					li {
						display: inline-block;
						width: 97px;
						margin-left: 68px;
						.imgimg {
							width: 95px;
							height: 95px;
							border: none;
							border-radius: 50%;
							box-sizing: border-box;
						}
						.active {
							width: 95px;
							height: 95px;
							border: 3px solid #fff;
							border-radius: 50%;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							font-size: 20px;
							margin-top: 12px;
							color: #FFFFFF;
							width: 100%;
							text-align: center;
						}
					}
				}
				.fuwuInput {
					width: 1000px;
					margin: 0 auto;
					margin-top: 47px;
					.shuru {
						width: 905px;
						height: 70px;
						border: 0;
						background: rgba(0, 0, 0, 0.20);
						color: #fff;
						font-size: 20px;
						color: #FFFFFF;
						line-height: 70px;
						float: left;
						text-indent: 34px;
						box-sizing: border-box;
					}
					.tijiao {
						background: #226DCF;
						width: 95px;
						height: 70px;
						line-height: 70px;
						text-align: center;
						color: #fff;
						border: none;
						float: left;
						font-size: 20px;
					}
				}
				.fuwuInfo {
					width: 1000px;
					height: 225px;
					overflow: auto;
					background: rgba(0, 0, 0, 0.20);
					margin: 0 auto;
					margin-top: 19px;
					h4 {
						margin-top: 23px;
						margin-left: 34px;
						font-size: 20px;
						color: #FFFFFF;
						width: 140px;
						height: 25px;
						line-height: 25px;
						font-weight: 100;
					}
					ul {
						width: 924px;
						margin: 0 auto;
						padding: 0;
						li {
							width: 100%;
							height: 25px;
							line-height: 25px;
							margin: 0;
							margin-top: 5px;
							float: left;
							span {
								float: left;
								margin: 0;
							}
							.Time {
								width: 200px;
							}
							.service {
								width: 200px;
							}
						}
					}
				}
			}
		}
	}
	}
</style>