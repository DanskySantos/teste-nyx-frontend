import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {ErrorComponent} from "./error/error.component";
import {AccessdeniedComponent} from "./accessdenied/accessdenied.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {LoginComponent} from "./login/login.component";
import {NewPasswordComponent} from "./newpassword/newpassword.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'error', data: {breadcrumb: 'Erro'}, component: ErrorComponent},
        {path: 'access', data: {breadcrumb: 'Acesso Negado'}, component: AccessdeniedComponent},
        {path: 'login', data: {breadcrumb: 'Login'}, component: LoginComponent},
        {path: 'forgotpassword', data: {breadcrumb: 'Esqueci a senha'}, component: ForgotPasswordComponent},
        {path: 'register', data: {breadcrumb: 'Registro'}, component: RegisterComponent},
        {path: 'newpassword', data: {breadcrumb: 'Nova Senha'}, component: NewPasswordComponent},
        {path: '**', redirectTo: '/notfound'}
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
