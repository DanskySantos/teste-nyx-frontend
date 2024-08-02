import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute} from '@angular/router';
@Component({
    templateUrl: './register.component.html',
    selector: 'app-register',

})
export class RegisterComponent implements OnInit {

    loading: boolean = false;
    registerForm!: FormGroup;
    maxDate: Date = new Date();

    constructor(private authService: AuthService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.authService.deleteCookies();
        this.createForm();
    }

    private createForm() {
        this.registerForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            birthday: new FormControl('', Validators.required),
        });
    }

    goBack() {
        window.history.back();
    }

    submit() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false
        }, 2000);
        localStorage.setItem('userEmail', this.email.value)
        this.authService.register(this.registerForm.value);
    }

    get name() {
        return this.registerForm.get('name')!;
    }

    get email() {
        return this.registerForm.get('email')!;
    }

    get password() {
        return this.registerForm.get('password')!;
    }

    get phone() {
        return this.registerForm.get('phone')!;
    }

    get userRoles() {
        return this.registerForm.get('userRoles')!;
    }
}
