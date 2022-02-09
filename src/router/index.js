import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test1 from '../views/test1.vue'
import test2 from '../views/test2.vue'



Vue.use(VueRouter)

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
  {
    path: '/cssTest',
    name: 'TestCss',
    component: () => import(/* webpackChunkName: "about" */ '../views/CssTest.vue')
  },
  {
    path: '/pdfTest',
    name: 'TestPdf',
    component: () => import(/* webpackChunkName: "about" */ '../views/pdfTest.vue')
  },
  {
    path: '/bbz',
    name: 'TestPdf',
    component: () => import(/* webpackChunkName: "about" */ '../views/bbz.vue'),
    children:[{
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2

    }
  ]
  }
]


const router = new VueRouter({
  routes
})

export default router
