<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view class='router'></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				transitionName: 'slide-left'
			}
		}

	}
</script>
<style lang="less" scoped>
	.router {
		position: absolute;
		width: 100%;
		transition: all .8s ease;
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
	}
	
	* {
		padding: 0;
		margin: 0;
		font-size: 14px;
		color: #333333;
		font-family: "微软雅黑";
	}
	
	hr {
		border: none;
		border-top: 1px solid #CCCCCC;
	}
	
	ul li {
		list-style: none;
	}
	
	.l {
		float: left;
	}
	
	.r {
		float: right;
	}
	
	.of {
		overflow: hidden;
	}
	
	.green {
		color: #57B663
	}
	
	.text-center {
		text-align: center;
	}
	
	input {
		outline: none;
		border: none;
		display: block;
		border-bottom: 1px solid #FFFFFF;
		background: none;
		color: #FFFFFF;
		padding: 2px 15px;
	}
	
	input::-webkit-input-placeholder {
		color: #FFFFFF;
		font-size: 12px;
	}
	
	.m5 {
		margin: 5px 0;
	}
	
	.button {
		padding: 8px 15px;
		background: #56B963;
		margin-bottom: 10px;
		text-align: center;
		color: #FFFFFF;
		cursor: pointer;
	}
	
	.button:hover {
		background: #3F9E4B;
	}
	
	a {
		text-decoration: none;
		outline: none;
		display: block;
	}
	
	.inline-block {
		display: inline-block;
	}
	
	.f12 {
		font-size: 12px;
	}
	/*网络布局*/
	
	.grid {
		display: flex;
	}
	
	.grid-cell {
		flex: 1;
	}
	
	.grid-cell.u-full {
		flex: 0 0 100%;
	}
	
	.grid-cell.u-1of2 {
		flex: 0 0 50%;
	}
	
	.grid-cell.u-1of3 {
		flex: 0 0 33.3333%;
	}
	
	.grid-cell.u-1of4 {
		flex: 0 0 25%;
	}
	/*媒体图片布局*/
	
	.media {
		display: flex;
		align-items: flex-start;
	}
	
	.media-figure {
		margin-right: 1em;
	}
	
	.media-figure img {
		border-radius: 200px;
	}
	
	.media-body {
		flex: 1;
	}
	
	#app .el-loading-spinner .path {
		stroke: #57B663;
	}
	
	#app .el-loading-spinner .el-loading-text {
		color: #57B663
	}
	/*.layout-menu-left{
        background: #464c5b;
    }*/
	/*  伪类清除浮动*/
	
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
</style>