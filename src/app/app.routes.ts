import { Routes } from '@angular/router';
import { AuthGuards } from './core/guards/auth.guards';

export const routes: Routes = [
    {
        path: 'auth',
        canActivate: [publicGuard],
        loadChildren: () => import('./auth/features/')
    },
    {
        path: '',
        canActivate: [privateGuard],
        loadComponent: () => import('./shared'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component'),
            },
            {
                path: 'products',
                loadChildren: () => import('./products/feactures/product.routes'),
            },
            {
                path: '**',
                redirectTo: 'dashboard'
            }

        ]
    }

];
