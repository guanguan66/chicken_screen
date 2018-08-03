<template>
	<div class="header">
			<img src="../assets/jnlogo1.png" alt="" />
			<span>嘉农会议系统</span>
			<div @click="quit" class="back">退出</div>
	</div>
</template>

<script>
	export default {
		methods: {
			quit() {
				/*删除session*/
				sessionStorage.setItem('username', null);
				this.$router.push('/')
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
	
	.header {
			background: rgba(0, 0, 0, 0.10);
			width: 100%;
			height: 100px;
			position: absolute;
			top: 0;
			z-index: 99999999;
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
</style>