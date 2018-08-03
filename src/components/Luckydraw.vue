<template>
	<div class="contain">
		<button class="fanhui"><router-link to="Index" class="loginBtn">返回</router-link></button>
		<div class="box">
			<div class="left">
				<p>
					<span>{{count}}</span>人已加入奖池
				</p>
				<img class="imgg" src="../assets/img/1.jpg" />
				<img class="imgt" :src="prize_img" />
				<div class="select">
					<span>奖项</span>
					<select id="select1" name="selected" @change="changeShop">
						<option value="0">未选择</option>
						<option :value="news.id" v-for="news in news_list">{{news.award_title}}</option>
					</select>
					<span>奖品</span>
					<select style="width:120px;text-align: center;" id="select2" name="selected" @change="liandong">
						<option value="0">未选择</option>
						<option :value="newst.id" v-for="newst in newst_list">{{newst.prize_name}}</option>
					</select>
					<span>数量</span>
					<select id="select3" name="selected">
						<option value="0">未选择</option>
						<option :value="newss.person" v-for="newss in newss_list">{{newss.person}}</option>
					</select>
					<input @click='start' type="button" class="btn" value="开始抽奖">
				</div>
			</div>
			<div style="display: none;" class="right">
				<ul>
					<li v-for="newsd in newsd_list">
						<img :src="newsd.headimg" />
						<span>{{newsd.realname}}</span>
					</li>
				</ul>
				<div class="sanjiaobox">
					<div @click='qingkong' class="sanjiao"></div>
					<input @click='qingkong' type="button" class="qingkong" value="清空">
				</div>

			</div>
			<div class="right2">
				<ul>

				</ul>
				<div class="sanjiaobox">
					<div @click='qingkong' class="sanjiao"></div>
					<input @click='qingkong' type="button" class="qingkong" value="清空">
				</div>

			</div>
		</div>
		<div class="hide">
			<div class="hideBox">
				<ul>
					<li v-for="newsk in newsk_list">
						<img :src="newsk.headimg" />
						<span>{{newsk.realname}}</span>
					</li>
				</ul>
				<input @click='close' type="button" class="btn1" value="关闭">
			</div>
		</div>
	</div>
</template>

<script>
	/*引入公共方法*/
	import { bigAwardShow } from "../api/user";
	import { playAward } from "../api/user";
	import { jsonPrize } from "../api/user";
	import { prizeRecord } from "../api/user";
	import { cancelPrize } from "../api/user";
	export default {
		data() {
			return {
				name: '',
				count: '',
				award_title: '',
				person: '',
				prize_img: '',
				news_list: {
					title: '',
					image: '',
					ga_prefix: '',
					type: 0,
					id: 0
				},
				newss_list: {
					title: '',
					image: '',
					ga_prefix: '',
					type: 0,
					id: 0
				},
				newst_list: {
					title: '',
					image: '',
					ga_prefix: '',
					type: 0,
					id: 0
				},
				newsd_list: {
					title: '',
					image: '',
					ga_prefix: '',
					type: 0,
					id: 0
				},
				newsk_list: {
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
				token: token
			}
			bigAwardShow(data).then(res => {
				console.log(res)
				this.count = res.data.count;
				this.news_list = res.data.award;
				this.newss_list = res.data.person;
			})
		},
		methods: {
			changeShop() {
				var sel = document.getElementById("select1");

				var index = sel.selectedIndex; // 选中索引

				var albumid = sel.options[index].value; //要的值
				//					this.$message.error(albumid)
				/*接口请求*/
				let data = {
					'award': albumid
				}
				jsonPrize(data).then(res => {
					console.log(res)
					this.newst_list = res.data.list;
					$("#select2").val("0");
				})

			},
			liandong() {

				var sel = document.getElementById("select2");

				var index2 = sel.selectedIndex; // 选中索引

				var albumid2 = sel.options[index2].value; //要的值
				//this.$message.error(albumid2)

				let token = sessionStorage.getItem("token");
				this.token = token
				/*接口请求*/
				let data = {
					'prize': albumid2,
					token: token
				}
				//this.$message.error(albumid2+'|'+mid);
				prizeRecord(data).then(res => {
					console.log(res)
					this.prize_img = res.data.prizelist.prize_img;
					this.newsd_list = res.data.recordlist;
					$('.right').css('display', 'block');
					$('.right2').css('display', 'none');
					$('.imgg').css('display', 'none');
					$('.imgt').css('display', 'block');

				})

			},
			start() {
				var sel = document.getElementById("select1");

				var index = sel.selectedIndex; // 选中索引

				var albumid = sel.options[index].value; //要的值

				var sel2 = document.getElementById("select2");

				var index2 = sel2.selectedIndex; // 选中索引

				var albumid2 = sel2.options[index2].value; //要的值

				var sel3 = document.getElementById("select3");

				var index3 = sel3.selectedIndex; // 选中索引

				var albumid3 = sel3.options[index3].value; //要的值
				//this.$message.error(albumid2)

				let token = sessionStorage.getItem("token");
				this.token = token
				/*接口请求*/
				//				this.$message.error(albumid);
				//				this.$message.error(albumid2);
				//				this.$message.error(albumid3);
				//				this.$message.error(mid);
				let data = {
					'award': albumid,
					'prize': albumid2,
					'person': albumid3,
					'token': token
				}
				playAward(data).then(res => {
					console.log(res)
					this.newsk_list = res.data;
					if(res.data == "") {
						this.$message.error('中奖人已满')
					} else if(res.data.award == "0") {
						this.$message.error('请选择奖项')
					} else if(res.data.prize == "0") {
						this.$message.error('请选择奖品')
					} else if(res.data.person == "0") {
						this.$message.error('请选择数量')
					} else {
						$(".hide").fadeIn(2000);
					}

				})
			},
			close() {

				var sel = document.getElementById("select2");

				var index2 = sel.selectedIndex; // 选中索引

				var albumid2 = sel.options[index2].value; //要的值
				//this.$message.error(albumid2)

				let token = sessionStorage.getItem("token");
				this.token = token
				/*接口请求*/
				let data = {
					'prize': albumid2,
					'token': token
				}
				//this.$message.error(albumid2+'|'+mid);
				prizeRecord(data).then(res => {
					console.log(res)
					this.prize_img = res.data.prizelist.prize_img;
					this.newsd_list = res.data.recordlist;
					$('.right').css('display', 'block');
					$('.right2').css('display', 'none');
					$('.imgg').css('display', 'none');
					$('.imgt').css('display', 'block');

				})
				$('.hide').fadeOut(2000);
			},
			qingkong() {
				var sel = document.getElementById("select1");

				var index = sel.selectedIndex; // 选中索引

				var albumid = sel.options[index].value; //要的值

				var sel2 = document.getElementById("select2");

				var index2 = sel2.selectedIndex; // 选中索引

				var albumid2 = sel2.options[index2].value; //要的值

				//this.$message.error(albumid2)

				let token = sessionStorage.getItem("token");
				this.token = token
				/*接口请求*/
				let data = {
					'award': albumid,
					'prize': albumid2,
					'token': token
				}
				cancelPrize(data).then(res => {
					console.log(res)
					this.is_show = res.data.is_show;
					if(this.is_show == 0) {
						this.$message({
							message: '清空成功',
							type: 'success'
						});
						var sel = document.getElementById("select2");

						var index2 = sel.selectedIndex; // 选中索引

						var albumid2 = sel.options[index2].value; //要的值
						//this.$message.error(albumid2)

						let token = sessionStorage.getItem("token");
						this.token = token
						/*接口请求*/
						let data = {
							'prize': albumid2,
							token: token
						}
						//this.$message.error(albumid2+'|'+mid);
						prizeRecord(data).then(res => {
							console.log(res)
							this.prize_img = res.data.prizelist.prize_img;
							this.newsd_list = res.data.recordlist;
							$('.right').css('display', 'block');
							$('.right2').css('display', 'none');
							$('.imgg').css('display', 'none');
							$('.imgt').css('display', 'block');

						})
					}

				})
			}
		}
	}
	$("body").keydown(function(event) {
		if(event.keyCode == "13") { //keyCode=13是回车键
			$(".btn").click();
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
		min-width: 1200px;
		height: 100%;
		min-height: 768px;
		background: url(../assets/choujiang-bg.png);
		position: absolute;
		top: 0;
		background-size: 100% 100%;
		bottom: 0;
		left: 0;
		right: 0;
		.box {
			position: relative;
			width: 1200px;
			margin: 0 auto;
			.left {
				width: 485px;
				height: 520px;
				position: absolute;
				left: 0;
				top: 260px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				p {
					font-size: 28px;
					color: #FFFFFF;
					letter-spacing: 0;
					width: 100%;
					text-align: center;
					margin-top: 25px;
					span {
						font-size: 28px;
						color: #FFFFFF;
					}
				}
				.imgg {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					display: inline-block;
					margin-left: 126px;
					margin-top: 45px;
					margin-bottom: 36px;
					background: rgba(142, 142, 147, 0.80);
					border: 2px solid #FFFFFF;
					box-sizing: border-box;
				}
				.imgt {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					display: inline-block;
					margin-left: 126px;
					margin-top: 45px;
					margin-bottom: 36px;
					background: rgba(142, 142, 147, 0.80);
					border: 2px solid #FFFFFF;
					box-sizing: border-box;
					display: none;
				}
				.select {
					span {
						font-size: 18px;
						color: #FFFFFF;
						letter-spacing: 0;
						text-align: left;
						margin-left: 19px;
					}
					select {
						font-size: 18px;
						color: #FFFFFF;
						letter-spacing: 0;
						text-align: left;
						/* padding: 0 5px; */
						width: 80px;
						height: 40px;
						line-height: 40px;
						color: #fff;
						text-align: center;
						background: rgba(0, 0, 0, 0);
						/* margin-left: 40px; */
						border: 0;
						outline: none;
						option {
							color: #333;
							border: 0;
							outline: none;
							background color: rgba(0, 0, 0, 0);
							i {
								display: none;
							}
						}
					}
					.btn {
						background: #D0021B;
						border: 1px solid #FBFBFB;
						color: #fff;
						width: 135px;
						height: 40px;
						text-align: center;
						line-height: 40px;
						margin-left: 161px;
						margin-top: 60px;
					}
				}
			}
			.right {
				width: 645px;
				height: 520px;
				position: absolute;
				right: 0;
				overflow: auto;
				top: 260px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 20px;
					padding: 0;
					li {
						list-style: none;
						float: left;
						width: 100px;
						margin-top: 36px;
						margin-right: 25px;
						img {
							width: 100px;
							height: 100px;
							border-radius: 50%;
							border: 2px solid #fff;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
				.sanjiaobox {
					position: absolute;
					width: 140px;
					height: 140px;
					top: 418px;
					right: 0;
					overflow: hidden;
					.sanjiao {
						margin-left: 72px;
						margin-top: 72px;
						width: 0px;
						height: 0;
						border-width: 70px;
						/* overflow: hidden; */
						border-style: solid;
						border-color: transparent transparent transparent #D0021B;
						transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						-moz-transform: rotate(45deg);
						-webkit-transform: rotate(45deg);
						-o-transform: rotate(45deg);
					}
					.qingkong {
						position: absolute;
						top: 96px;
						right: 0;
						background: #D0021B;
						border: none;
						color: #fff;
						width: 50px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						font-size: 21px;
					}
				}
			}
			.right2 {
				width: 645px;
				height: 520px;
				position: absolute;
				right: 0;
				overflow: auto;
				top: 260px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 20px;
					padding: 0;
					li {
						list-style: none;
						float: left;
						width: 100px;
						margin-top: 36px;
						margin-right: 25px;
						img {
							width: 100px;
							height: 100px;
							border-radius: 50%;
							border: 2px solid #fff;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
				.sanjiaobox {
					position: absolute;
					width: 140px;
					height: 140px;
					top: 380px;
					right: 0;
					overflow: hidden;
					.sanjiao {
						margin-left: 72px;
						margin-top: 72px;
						width: 0px;
						height: 0;
						border-width: 70px;
						/* overflow: hidden; */
						border-style: solid;
						border-color: transparent transparent transparent #D0021B;
						transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						-moz-transform: rotate(45deg);
						-webkit-transform: rotate(45deg);
						-o-transform: rotate(45deg);
					}
					.qingkong {
						position: absolute;
						top: 96px;
						right: 0;
						background: #D0021B;
						border: none;
						color: #fff;
						width: 50px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						font-size: 21px;
					}
				}
			}
		}
		.hide {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.8);
			z-index: 9999;
			.hideBox {
				position: absolute;
				left: 0;
				right: 0;
				width: 1000px;
				height: 640px;
				margin: 0 auto;
				margin-top: 165px;
				z-index: 99999;
				background: url(../assets/choujiang-bg.png);
				background-size: 100% 100%;
				.btn1 {
					background: #D0021B;
					border: 1px solid #FBFBFB;
					color: #fff;
					width: 135px;
					height: 40px;
					text-align: center;
					line-height: 40px;
					position: absolute;
					left: 0;
					margin: 0 auto;
					right: 0;
				}
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 140px;
					height: 440px;
					padding: 0;
					overflow: auto;
					li {
						width: 120px;
						height: 160px;
						float: left;
						list-style: none;
						margin-right: 50px;
						margin-top: 50px;
						img {
							width: 120px;
							height: 120px;
							border-radius: 50%;
							box-sizing: border-box;
							border: 2px solid #fff;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
			}
		}
		.fanhui {
			position: absolute;
			top: 92px;
			right: 38px;
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
	
	@media screen and (max-width: 1200px) {
	.contain {
		width: 100%;
		min-width: 1200px;
		height: 100%;
		min-height: 768px;
		background: url(../assets/choujiang-bg.png);
		position: absolute;
		top: 0;
		background-size: 100% 100%;
		bottom: 0;
		left: 0;
		right: 0;
		.box {
			position: relative;
			width: 1200px;
			margin: 0 auto;
			.left {
				width: 485px;
				height: 510px;
				position: absolute;
				left: 0;
				top: 230px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				p {
					font-size: 28px;
					color: #FFFFFF;
					letter-spacing: 0;
					width: 100%;
					text-align: center;
					margin-top: 25px;
					span {
						font-size: 28px;
						color: #FFFFFF;
					}
				}
				.imgg {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					display: inline-block;
					margin-left: 126px;
					margin-top: 45px;
					margin-bottom: 36px;
					background: rgba(142, 142, 147, 0.80);
					border: 2px solid #FFFFFF;
					box-sizing: border-box;
				}
				.imgt {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					display: inline-block;
					margin-left: 126px;
					margin-top: 45px;
					margin-bottom: 36px;
					background: rgba(142, 142, 147, 0.80);
					border: 2px solid #FFFFFF;
					box-sizing: border-box;
					display: none;
				}
				.select {
					span {
						font-size: 18px;
						color: #FFFFFF;
						letter-spacing: 0;
						text-align: left;
						margin-left: 19px;
					}
					select {
						font-size: 18px;
						color: #FFFFFF;
						letter-spacing: 0;
						text-align: left;
						/* padding: 0 5px; */
						width: 80px;
						height: 40px;
						line-height: 40px;
						color: #fff;
						text-align: center;
						background: rgba(0, 0, 0, 0);
						/* margin-left: 40px; */
						border: 0;
						outline: none;
						option {
							color: #333;
							border: 0;
							outline: none;
							background color: rgba(0, 0, 0, 0);
							i {
								display: none;
							}
						}
					}
					.btn {
						background: #D0021B;
						border: 1px solid #FBFBFB;
						color: #fff;
						width: 135px;
						height: 40px;
						text-align: center;
						line-height: 40px;
						margin-left: 161px;
						margin-top: 60px;
					}
				}
			}
			.right {
				width: 645px;
				height: 510px;
				position: absolute;
				right: 0;
				overflow: auto;
				top: 230px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 20px;
					padding: 0;
					li {
						list-style: none;
						float: left;
						width: 100px;
						margin-top: 36px;
						margin-right: 25px;
						img {
							width: 100px;
							height: 100px;
							border-radius: 50%;
							border: 2px solid #fff;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
				.sanjiaobox {
					position: absolute;
					width: 140px;
					height: 140px;
					top: 418px;
					right: 0;
					overflow: hidden;
					.sanjiao {
						margin-left: 72px;
						margin-top: 72px;
						width: 0px;
						height: 0;
						border-width: 70px;
						/* overflow: hidden; */
						border-style: solid;
						border-color: transparent transparent transparent #D0021B;
						transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						-moz-transform: rotate(45deg);
						-webkit-transform: rotate(45deg);
						-o-transform: rotate(45deg);
					}
					.qingkong {
						position: absolute;
						top: 96px;
						right: 0;
						background: #D0021B;
						border: none;
						color: #fff;
						width: 50px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						font-size: 21px;
					}
				}
			}
			.right2 {
				width: 645px;
				height: 510px;
				position: absolute;
				right: 0;
				overflow: auto;
				top: 230px;
				background: rgba(255, 255, 255, 0.2);
				border: 2px solid #FFFFFF;
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 20px;
					padding: 0;
					li {
						list-style: none;
						float: left;
						width: 100px;
						margin-top: 36px;
						margin-right: 25px;
						img {
							width: 100px;
							height: 100px;
							border-radius: 50%;
							border: 2px solid #fff;
							box-sizing: border-box;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
				.sanjiaobox {
					position: absolute;
					width: 140px;
					height: 140px;
					bottom: 0;
					right: 0;
					overflow: hidden;
					.sanjiao {
						margin-left: 72px;
						margin-top: 72px;
						width: 0px;
						height: 0;
						border-width: 70px;
						/* overflow: hidden; */
						border-style: solid;
						border-color: transparent transparent transparent #D0021B;
						transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						-moz-transform: rotate(45deg);
						-webkit-transform: rotate(45deg);
						-o-transform: rotate(45deg);
					}
					.qingkong {
						position: absolute;
						top: 96px;
						right: 0;
						background: #D0021B;
						border: none;
						color: #fff;
						width: 50px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						font-size: 21px;
					}
				}
			}
		}
		.hide {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.8);
			z-index: 9999;
			.hideBox {
				position: absolute;
				left: 0;
				right: 0;
				width: 1000px;
				height: 640px;
				margin: 0 auto;
				margin-top: 70px;
				z-index: 99999;
				background: url(../assets/choujiang-bg.png);
				background-size: 100% 100%;
				.btn1 {
					background: #D0021B;
					border: 1px solid #FBFBFB;
					color: #fff;
					width: 135px;
					height: 40px;
					text-align: center;
					line-height: 40px;
					position: absolute;
					left: 0;
					margin: 0 auto;
					right: 0;
				}
				ul {
					width: 80%;
					margin: 0 auto;
					margin-top: 140px;
					height: 440px;
					padding: 0;
					overflow: auto;
					li {
						width: 120px;
						height: 160px;
						float: left;
						list-style: none;
						margin-right: 50px;
						margin-top: 50px;
						img {
							width: 120px;
							height: 120px;
							border-radius: 50%;
							box-sizing: border-box;
							border: 2px solid #fff;
						}
						span {
							display: inline-block;
							width: 100%;
							text-align: center;
							font-size: 20px;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-top: 5px;
						}
					}
				}
			}
		}
		.fanhui {
			position: absolute;
			top: 92px;
			right: 38px;
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
	}
</style>