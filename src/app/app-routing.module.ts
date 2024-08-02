import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from './layout/app.layout.component';
import {AuthGuard} from "./demo/components/guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: AppLayoutComponent,
        children: [
            {
                path: 'home',
                canActivate: [AuthGuard],
                data: {breadcrumb: 'Home'},
                loadChildren: () => import('./demo/components/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'utilities',
                canActivate: [AuthGuard],
                data: {breadcrumb: 'Utilities'},
                loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule)
            },
            {
                path: 'profile',
                canActivate: [AuthGuard],
                data: {breadcrumb: 'Configurações de usuário'},
                loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule)
            },
        ]
    },
    {
        path: 'auth',
        data: {breadcrumb: 'Autenticação'},
        loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)
    },
    {path: '**', redirectTo: '/auth/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
