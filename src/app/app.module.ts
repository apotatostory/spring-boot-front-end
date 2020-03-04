import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { MaterialModule } from './Material/material.module';
import { DynamicLoaderDirective } from './Base/directive/dynamic-loader.directive';
import { CacheService } from './Base/service/cache.service';
import { CallService } from './Base/service/call.service';
import { InMemoryDataService } from './Base/service/in-memory-data.service';
import { InjectService } from './Base/service/inject.service';
import { MissionService } from './Base/service/mission.service';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { CountdownTimerComponent } from './Base/component/countdown-timer/countdown-timer.component';
import { EmitComponent } from './Base/component/emit/emit.component';
import { PopupComponent } from './Base/component/popup/popup.component';
import { ErrorComponent } from './Page/common/error/error.component';
import { FooterComponent } from './Page/common/footer/footer.component';
import { HeaderComponent } from './Page/common/header/header.component';
import { Buy00001Component } from './Page/task/buy/buy00001/buy00001.component';
import { Buy00002Component } from './Page/task/buy/buy00002/buy00002.component';
import { Sell00001Component } from './Page/task/sell/sell00001/sell00001.component';




@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        Buy00001Component,
        Buy00002Component,
        Sell00001Component,
        CountdownTimerComponent,
        EmitComponent,
        DynamicLoaderDirective,
        PopupComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    ],
    exports: [],
    providers: [
        InjectService,
        CallService,
        CacheService,
        InMemoryDataService,
        MissionService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        InjectService.injector = this.injector;
    }
}
