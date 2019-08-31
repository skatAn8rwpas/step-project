// eslint-disable-next-line
import { RouterOptions, RouteConfig } from 'vue-router'

import Template from '../views/Template.vue'
import Home from '../views/Home.vue'

const AdminTemplate = () => import(/* webpackChunkName: "admin:dashboard" */ '../views/admin/Template.vue')
const AdminDashboard = () => import(/* webpackChunkName: "admin:dashboard" */ '../views/admin/Dashboard.vue')
const AdminSettings = () => import(/* webpackChunkName: "admin:settings" */ '../views/admin/Settings.vue')
// import AdminTemplate from '../views/admin/Template.vue'
// import AdminDashboard from '../views/admin/Dashboard.vue'
// import AdminSettings from '../views/admin/Settings.vue'

/**@type {RouteConfig[]} */
const _routes = [
  {
    path: '/', component: Template, children: [
      { path: 'welcome', name: 'welcome', component: Home },
      { path: 'about', name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      { path: 'faq', name: 'faq',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
      }
    ], redirect: { name: 'welcome', replace: true }
  },
  {
    path: '/admin', component: AdminTemplate, children: [
      { path: 'dashboard', name: 'admin:dashboard', component: AdminDashboard },
      { path: 'settings', name: 'admin:settings', component: AdminSettings },
    ], redirect: { name: 'admin:dashboard', replace: true }
  }
]

/** @type {RouterOptions} options*/
const _options = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: _routes
}

export const options = _options;
export const routes = _routes;
