import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginMontir from '../views/LoginMontir.vue'
import LoginCustomer from '../views/LoginCustomer.vue'
import RegisterMontir from '../views/RegisterMontir.vue'
import RegisterCustomer from '../views/RegisterCustomer.vue'
import Cuci from '../views/Cuci.vue'
import BantuanDarurat from '../views/BantuanDarurat.vue'
import PenggantianAki from '../views/PenggantianAki.vue'
import Servis from '../views/Servis.vue'
import Montir from '../views/Montir.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import NavbarMontir from '../views/layouts/NavbarMontir.vue'
import AcceptJob from '../views/AcceptJob.vue'
import Riwayat from '../views/Riwayat.vue'






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
    components: {default: Contact, header: Navbar},
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
  {
    path: '/cuci',
    name: 'cuci',
    components: {default: Cuci, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/servis',
    name: 'servis',
    components: {default: Servis, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/penggantian_aki',
    name: 'penggantian_aki',
    components: {default: PenggantianAki, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/bantuan_darurat',
    name: 'bantuan_darurat',
    components: {default: BantuanDarurat, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/montir',
    name: 'montir',
    components: {default: Montir},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/acceptjob',
    name: 'acceptjob',
    components: {default: AcceptJob},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/riwayat',
    name: 'riwayat',
    components: {default: Riwayat},
    // meta: { 
    //   requiresAuth: true
    // }
  }
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
