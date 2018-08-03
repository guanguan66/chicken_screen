import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Information from '@/components/Information'
import Agenda from '@/components/Agenda'
import Meetingdata from '@/components/Meetingdata'
import Personnel from '@/components/Personnel'
import Service from '@/components/Service'
import Setup from '@/components/Setup'
import Signin from '@/components/Signin'
import Luckydraw from '@/components/Luckydraw'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/Index',
			component: Index
		},
		{
			path: '/Information',
			name: 'Information',
			component: Information
		},
		{
			path: '/Agenda',
			name: 'Agenda',
			component: Agenda
		},
		{
			path: '/Meetingdata',
			name: 'Meetingdata',
			component: Meetingdata
		},
		{
			path: '/Personnel',
			name: 'Personnel',
			component: Personnel
		},
		{
			path: '/Service',
			name: 'Service',
			component: Service
		},
		{
			path: '/Setup',
			name: 'Setup',
			component: Setup
		},
		{
			path: '/Signin',
			name: 'Signin',
			component: Signin
		},
		{
			path: '/Luckydraw',
			name: 'Luckydraw',
			component: Luckydraw
		}
	]
})