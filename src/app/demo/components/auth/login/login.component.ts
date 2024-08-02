import { Component, OnInit } from '@angular/core';
        import { AuthService } from '../services/auth.service';
        import { Credentials } from '../../shared/models/credentials.model';
        import { FormControl, FormGroup, Validators } from '@angular/forms';

        @Component({
            templateUrl: './login.component.html',
            selector: 'button-loading-demo',
        })
        export class LoginComponent implements OnInit {

            loading: boolean = false;
            loginForm!: FormGroup;

            constructor(private authService: AuthService) {}

            ngOnInit() {
                this.authService.deleteCookies();
                this.loginForm = new FormGroup({
                    email: new FormControl('', [Validators.required]),
                    password: new FormControl('', [Validators.required]),
                });
            }

            submit() {
                this.loading = true;

                setTimeout(() => {
                    this.loading = false
                }, 2000);
                this.login();
    }

    get emailControl() {
        return this.loginForm.get('email')!;
    }

    get passwordControl() {
        return this.loginForm.get('password')!;
    }

    login() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        const credentials: Credentials = {
            email: this.emailControl.value,
            password: this.passwordControl.value
        };
        localStorage.setItem('userEmail', this.emailControl.value)
        this.authService.login(credentials);
    }

    get filledInput(): boolean {
        return false;
    }
}
