import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CacheService } from './Base/base-component/service/cache.service';
import { CallService } from './Base/base-component/service/call.service';
import { InjectService } from './Base/base-component/service/inject.service';
import { MaterialModule } from './Material/material.module';
import { ErrorComponent } from './Page/error/error.component';
import { FooterComponent } from './Page/footer/footer.component';
import { HeaderComponent } from './Page/header/header.component';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';



@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule
    ],
    exports: [],
    providers: [
        InjectService,
        CallService,
        CacheService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        InjectService.injector = this.injector;
    }
}
