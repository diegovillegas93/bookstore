import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import About from '@/components/About'
import AdminHome from '@/components/AdminHome'
import AdminProducts from '@/components/AdminProducts'

Vue.use(Router)

import store from '@/store';
const beforeEnter = (to, from, next) =>{
  if (store.state.authModule.looged){
    next({path:'/'});
  }else{
    next();
  }
};
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{Auth:false, title:'Inicio'}
    },
     {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{Auth:false, title:'Register'},
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)
    },
     {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{Auth:false, title:'Login'},
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)

    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {Auth: false, tittle: 'About'}
    },
      {
      path:'/admin',
      name:'/Admin',
      component:'AdminHome',
      meta:{Auth:true,title:'Administracion', 'role':'admin'},
      children:[
          {
          path:'products',
          name: 'AdminProducts',
          component: AdminProducts,
          meta:{title:'Administrar Libros'},
          }
              ]
    }
  ]
})

router.beforeEach((to, from, next) =>{
  document.tittle = to.meta.tittle;
  if (to.meta.Auth && !store.state.authModule.logged && store.state.logged){
    next({path:'/login'});
  }else{
    if (to.meta.role){
      if (store.state.loaded && (to.meta.role !== store.authModule.role)){
        next({path:'/'});
        return;
      }
    }
    next();
  }
});

export default router;
