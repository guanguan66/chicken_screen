// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
//import kbtheader from './components/header.vue'

Vue.use(VueResource)
Vue.config.productionTip = false

// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

/* eslint-disable no-new */

//Vue.component('myheader', kbtheader);

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})