import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import SingleBlog from '../views/SingleBlog.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginMontir from '../views/LoginMontir.vue'
import LoginCustomer from '../views/LoginCustomer.vue'
import RegisterMontir from '../views/RegisterMontir.vue'
import RegisterCustomer from '../views/RegisterCustomer.vue'




Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   components: {default: Login}
  // },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/blog',
    name: 'blog',
    components: {default: Blog, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    components: {default: About, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {default: Contact, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/singleblog',
    name: 'singleblog',
    components: {default: SingleBlog, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login, header: Navbar},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register, header: Navbar},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/registercustomer',
    name: 'registercustomer',
    components: {default: RegisterCustomer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/registermontir',
    name: 'registermontir',
    components: {default: RegisterMontir},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/logincustomer',
    name: 'logincustomer',
    components: {default: LoginCustomer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/loginmontir',
    name: 'loginmontir',
    components: {default: LoginMontir},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  // {
  //   path: '/montir',
  //   name: 'montir',
  //   components: {default: Montir, sidebar: Sidebar},
  //   // meta: { 
  //   //   requiresAuth: true
  //   // }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
