import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';
import {SingleComponent} from './single/single.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        SingleComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
