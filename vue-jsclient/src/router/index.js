import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Controale from '../views/test/Controale.vue'
import GridTest from '../views/test/GridTest'
import viewGridul from '../views/test/viewGridul'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   {     name: 'TestControale',   path: '/testControale',  component: Controale   },
   {     name: 'TestGrid',        path: '/testGrid',  component: GridTest   },
   {     name: 'Gridul',        path: '/viewGridul',  component: viewGridul   },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
