import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CacheService } from './Base/service/cache.service';
import { CallService } from './Base/service/call.service';
import { InMemoryDataService } from './Base/service/in-memory-data.service';
import { InjectService } from './Base/service/inject.service';
import { MaterialModule } from './Material/material.module';
import { ErrorComponent } from './Page/common/error/error.component';
import { FooterComponent } from './Page/common/footer/footer.component';
import { HeaderComponent } from './Page/common/header/header.component';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { Buy00001Component } from './Page/task/buy/buy00001/buy00001.component';



@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        Buy00001Component,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    ],
    exports: [],
    providers: [
        InjectService,
        CallService,
        CacheService,
        InMemoryDataService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        InjectService.injector = this.injector;
    }
}
