import Vue from 'vue'
import Router from 'vue-router'
import { options } from './routes'

Vue.use(Router)

const router = new Router(options)

export default router


// import Template from './views/Template.vue'
// import Home from './views/Home.vue'

// // const AdminTemplate = () => import(/* webpackChunkName: "admin:dashboard" */ './views/admin/Template.vue')
// // const AdminDashboard = () => import(/* webpackChunkName: "admin:dashboard" */ './views/admin/Dashboard.vue')
// import AdminTemplate from './views/admin/Template.vue'
// import AdminDashboard from './views/admin/Dashboard.vue'


// /**@type {RouteConfig[]} */
// const routes = [
//   {
//     path: '/', component: Template, children: [
//       { path: 'welcome', name: 'welcome', component: Home },
//       { path: 'about', name: 'about',
//         component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//       },
//       { path: 'faq', name: 'faq',
//         component: () => import(/* webpackChunkName: "faq" */ './views/Faq.vue')
//       }
//     ], redirect: {name: 'welcome'}
//   },
//   {
//     path: '/admin',
//     component: AdminTemplate, children: [
//       { path: 'dashboard', name: 'admin:dashboard', component: AdminDashboard },
//     ], redirect: {name: 'admin:dashboard'}
//   }
// ]

// /** @type {RouterOptions} options*/
// const options = {
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// }
