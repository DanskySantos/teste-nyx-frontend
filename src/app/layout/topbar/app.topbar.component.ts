import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "../service/app.layout.service";
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    menu: MenuItem[] = [];

    @ViewChild('searchinput') searchInput!: ElementRef;

    @ViewChild('menubutton') menuButton!: ElementRef;

    searchActive: boolean = false;
    username?: string;

    constructor(public layoutService: LayoutService,
                private cookieService: CookieService,
                private router: Router) {
        this.username = cookieService.get('username');
    }

    goToProfileEdit() {
        this.router.navigateByUrl('/profile');
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    signOut() {
        this.cookieService.deleteAll();
        this.router.navigateByUrl('auth/login')
    }

    activateSearch() {
        this.searchActive = true;
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 100);
    }

    deactivateSearch() {
        this.searchActive = false;
    }

    removeTab(event: MouseEvent, item: MenuItem, index: number) {
        this.layoutService.onTabClose(item, index);
        event.preventDefault();
    }

    get layoutTheme(): string {
        return this.layoutService.config().layoutTheme;
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    get logo(): string {
        const path = 'assets/layout/images/logo-';
        const logo = 'light.svg';
        return path + logo;
    }

    get tabs(): MenuItem[] {
        return this.layoutService.tabs;
    }
}
