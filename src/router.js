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
            name: 'Home',
            path: 'home',
            component: () => import('./view/vHome.vue'),
        },
        {
            name: 'Inventario',
            path: 'inventario',
            component: () => import('./view/vInventario.vue'),
        },
        {
            name: 'AlmacenTups',
            path: 'almacen',
            component: () => import('./view/vAlmacen.vue'),
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