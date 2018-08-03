<template>
	<div class="contain">
		<h1>{{biaoti}}</h1>
		<p>签到人数：<span>{{count}}</span>人</p>
		<img class="wx2wm" :src="qd_qrcode" />
		<button class="fanhui"><router-link to="Index" class="loginBtn">返回</router-link></button>
		<div class="sign_box">
			<ul>
				<li v-for="news in news_list">
					<img :src="news.headimg" />
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	/*引入公共方法*/
	import { bigSignInShow } from "../api/user";
	import { jsonList } from "../api/user";
	//动画效果
	jQuery.extend(jQuery.easing, {
		easeInQuad: function(e, a, c, b, d) {
			return b * (a /= d) * a + c
		},
		easeOutQuad: function(e, a, c, b, d) {
			return -b * (a /= d) * (a - 2) + c
		},
		easeInOutQuad: function(e, a, c, b, d) {
			return 1 > (a /= d / 2) ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c
		},
		easeInCubic: function(e, a, c, b, d) {
			return b * (a /= d) * a * a + c
		},
		easeOutCubic: function(e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a + 1) + c
		},
		easeInOutCubic: function(e, a, c, b, d) {
			return 1 >
				(a /= d / 2) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c
		},
		easeInQuart: function(e, a, c, b, d) {
			return b * (a /= d) * a * a * a + c
		},
		easeOutQuart: function(e, a, c, b, d) {
			return -b * ((a = a / d - 1) * a * a * a - 1) + c
		},
		easeInOutQuart: function(e, a, c, b, d) {
			return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
		},
		easeInQuint: function(e, a, c, b, d) {
			return b * (a /= d) * a * a * a * a + c
		},
		easeOutQuint: function(e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a * a * a + 1) + c
		},
		easeInOutQuint: function(e, a, c, b, d) {
			return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
		},
		easeInSine: function(e, a,
			c, b, d) {
			return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
		},
		easeOutSine: function(e, a, c, b, d) {
			return b * Math.sin(a / d * (Math.PI / 2)) + c
		},
		easeInOutSine: function(e, a, c, b, d) {
			return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
		},
		easeInExpo: function(e, a, c, b, d) {
			return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
		},
		easeOutExpo: function(e, a, c, b, d) {
			return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
		},
		easeInOutExpo: function(e, a, c, b, d) {
			return 0 == a ? c : a == d ? c + b : 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
		},
		easeInCirc: function(e, a, c, b, d) {
			return -b *
				(Math.sqrt(1 - (a /= d) * a) - 1) + c
		},
		easeOutCirc: function(e, a, c, b, d) {
			return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
		},
		easeInOutCirc: function(e, a, c, b, d) {
			return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
		},
		easeInElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if(0 == a) return c;
			if(1 == (a /= d)) return c + b;
			f || (f = .3 * d);
			g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
			return -(g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f)) + c
		},
		easeOutElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if(0 ==
				a) return c;
			if(1 == (a /= d)) return c + b;
			f || (f = .3 * d);
			g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
			return g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + b + c
		},
		easeInOutElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if(0 == a) return c;
			if(2 == (a /= d / 2)) return c + b;
			f || (f = .3 * d * 1.5);
			g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
			return 1 > a ? -.5 * g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c : g * Math.pow(2, -10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + b + c
		},
		easeInBack: function(e, a, c, b, d, f) {
			void 0 ==
				f && (f = 1.70158);
			return b * (a /= d) * a * ((f + 1) * a - f) + c
		},
		easeOutBack: function(e, a, c, b, d, f) {
			void 0 == f && (f = 1.70158);
			return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
		},
		easeInOutBack: function(e, a, c, b, d, f) {
			void 0 == f && (f = 1.70158);
			return 1 > (a /= d / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
		},
		easeInBounce: function(e, a, c, b, d) {
			return b - h.easing.easeOutBounce(e, d - a, 0, b, d) + c
		},
		easeOutBounce: function(e, a, c, b, d) {
			return(a /= d) < 1 / 2.75 ? 7.5625 * b * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? b * (7.5625 *
				(a -= 2.25 / 2.75) * a + .9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
		},
		easeInOutBounce: function(e, a, c, b, d) {
			return a < d / 2 ? .5 * h.easing.easeInBounce(e, 2 * a, 0, b, d) + c : .5 * h.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + .5 * b + c
		}
	});

	export default {
		data() {
			return {
				name: '',
				biaoti: '',
				qd_qrcode: '',
				count: '',
				headimg: '',
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
			this.$nextTick(function() {
				setInterval(this.timer, 10000);
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
			bigSignInShow(data).then(res => {
//				console.log(res)
				this.biaoti = res.data.meet.name;
				this.qd_qrcode = res.data.meet.qd_qrcode;
				this.count = res.data.count;
				this.news_list = res.data.list;

			})
		},
		methods: {

			quit() {
				/*删除session*/
				sessionStorage.setItem('username', null);
				this.$router.push('/')
			},
			timer() {
				let token = sessionStorage.getItem("token");
				this.token = token

				let data = {
					'token': token,
				}
				/*接口请求*/
				jsonList(data).then(res => {
					//console.log(res)
					this.count = res.data.count;
					this.news_list = res.data.list;
					var d = 0; //delay
					var ry, tz, s; //transform params

					//animation time
					$(function() {
						//fading out the thumbnails with style
						$(".sign_box>ul>li").each(function() {
							d = Math.random() * 1000; //1ms to 1000ms delay
							$(this).delay(d).animate({
								opacity: 0
							}, {
								//while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
								step: function(n) {
									s = 1 - n; //scale - will animate from 0 to 1
									$(this).css("transform", "scale(" + s + ")");
								},
								duration: 1000,
							})
						}).promise().done(function() {
							//after *promising* and *doing* the fadeout animation we will bring the images back
							storm();
						})
					})
					//bringing back the images with style
					function storm() {
						$(".sign_box>ul>li").each(function() {
							d = Math.random() * 1000;
							$(this).delay(d).animate({
								opacity: 1
							}, {
								step: function(n) {
									//rotating the images on the Y axis from 360deg to 0deg
									ry = (1 - n) * 360;
									//translating the images from 1000px to 0px
									tz = (1 - n) * 1000;
									//applying the transformation
									$(this).css("transform", "rotateY(" + ry + "deg) translateZ(" + tz + "px)");
								},
								duration: 3000,
								//some easing fun. Comes from the jquery easing plugin.
								easing: 'easeOutQuint',
							})
						})
					}


				})

			}

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
		h1 {
			font-size: 78px;
			color: #FFFFFF;
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			margin: 0 auto;
			top: 64px;
		}
		p {
			position: absolute;
			font-size: 30px;
			color: #FFFFFF;
			right: 264px;
			top: 165px;
		}
		.wx2wm {
			width: 190px;
			height: 190px;
			position: absolute;
			top: 72px;
			left: 63px;
		}
		.fanhui {
			position: absolute;
			bottom: 45px;
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
		.sign_box {
			width: 1200px;
			height: 618px;
			background-image: radial-gradient(50% 126%, #309CFF 26%, #050434 100%);
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
			top: 270px;
			ul {
				border: 4px solid #ccc;
				width: 95%;
				margin: 0 auto;
				height: 96%;
				margin-top: 0.8%;
				padding: 0;
				li {
					list-style: none;
					width: 100px;
					height: 100px;
					margin-left: 13px;
					margin-top: 13px;
					float: left;
					img {
						width: 100%;
					}
				}
			}
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
		h1 {
			font-size: 58px;
    color: #FFFFFF;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 10px;
		}
		p {
			position: absolute;
			font-size: 30px;
			color: #FFFFFF;
			right: 264px;
			top: 93px;
		}
		.wx2wm {
			       width: 110px;
    height: 110px;
    position: absolute;
    top: 26px;
    left: 63px;
		}
		.fanhui {
			position: absolute;
			top: 45px;
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
		.sign_box {
			width: 1200px;
			height: 618px;
			background-image: radial-gradient(50% 126%, #309CFF 26%, #050434 100%);
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
			top: 139px;
			ul {
				border: 4px solid #ccc;
				width: 95%;
				margin: 0 auto;
				height: 96%;
				margin-top: 0.8%;
				padding: 0;
				li {
					list-style: none;
					width: 100px;
					height: 100px;
					margin-left: 13px;
					margin-top: 13px;
					float: left;
					img {
						width: 100%;
					}
				}
			}
		}
	}
	}
</style>