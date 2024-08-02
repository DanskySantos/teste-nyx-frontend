import {LOCALE_ID, NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppLayoutModule} from './layout/app.layout.module';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CookieService} from "ngx-cookie-service";
import {ToastrModule} from "ngx-toastr";
import {ButtonModule} from "primeng/button";

@NgModule({
    imports: [
        AppLayoutModule,
        AppRoutingModule,
        FormsModule,
        ToastModule,
        BrowserAnimationsModule,
        ButtonModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-top-right'
        }),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        CookieService,
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
