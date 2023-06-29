import {
    createRouter,
    createWebHistory
} from 'vue-router';

import {
    useAuthStore
} from './store/login/user.js';


const routes = [{
    name: 'login',
    path: '/login',
    component: () => import('./view/vLogin.vue'),
},
{
    path: '/',
    redirect: '/home',
    component: () => import('./layout/lLayout.vue'),
    meta: { requiresAuth: true },
    children: [
        // Components
        {
            name: 'home',
            path: 'home',
            component: () => import('./view/vHome.vue'),
        },
        {
            name: 'inventario',
            path: 'inventario',
            component: () => import('./view/vInventario.vue'),
        },
        {
            name: 'almacen',
            path: 'almacen',
            component: () => import('./view/vAlmacen.vue'),
        },
        {
            name: 'acctrans',
            path: 'acctrans/:id',
            //component: () => import('./view/lambayeque/vAcctrans.vue'),
            component: () => import('./view/lambayeque/vInventario.vue'),
        },
        {
            name: 'pronatel',
            path: 'pronatel/:id?',
            component: () => import('./view/lambayeque/vPronatel.vue'),
        },
        {
            name: 'tdemanda',
            path: 'tdemanda/:id?',
            component: () => import('./view/lambayeque/vTdemanda.vue'),
        },  
        {
            name: 'almacen',
            path: 'almacen/:id?',
            component: () => import('./view/tups/vAlmacen.vue'),
        }, 
        {
            name: 'planta',
            path: 'planta/:id?',
            component: () => import('./view/tups/vPlanta.vue'),
        }, 
        {
            name: 'grupoequipo',
            path: 'grupoequipo/:id?',
            component: () => import('./view/grupoequipo/vGrupoequipos.vue'),
        },     
    ]
}

];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    if (to.matched.some((route) => route.meta.requiresAuth)) {
        // Verificar si el usuario está autenticado
        if (!authStore.isAuthenticated) {
            // Redirigir al inicio de sesión si no está autenticado
            next('/login');
        } else {
            next();
            // Verificar la validez del token JWT
            /*try {
              await authStore.verifyToken();
              next();
            } catch (error) {
              // Redirigir al inicio de sesión si el token no es válido
              next('/login');
            } */
        }
    } else {
        next();
    }
});

export default router;