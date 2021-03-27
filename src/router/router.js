import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    alias: ['/login'],
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // meta: {
    //   requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    // }
  },

  {
    path: '/vendedores',
    name: 'Vendedores',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Vendedores.vue'),
    // meta: {
    //   requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    // }
  },

  {
    path: '/detalleVendedor',
    name: 'DetalleVendedor',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/DetalleVendedor.vue'),
    // meta: {
    //   requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    // }
  },

  {
    path: '*',
    redirect: ['/']
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// guarda de navegación 
// router.beforeEach((to,from,next)=>{
//   let usuario = firebase.auth().currentUser; // traemos la información del usuario conextado en el momento, si no hay usuario, será null.
//   let login = to.matched.some(result => result.meta.requiresAuth); //buscamos cual ruta tiene activo un meta
//
//   if (!usuario && login) {
//     next({name: 'Login'}); // si la ruta tiene activo el meta y no hay usuario conectado en el sistema, no se deje ingresar a la ruta y se envia a login.
//   } else if(usuario && !login) {
//     next();
//   } else {
//     next();
//   }
// });

export default router
