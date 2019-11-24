import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';
import {SingleComponent} from './single/single.component';
import {AdminComponent} from './admin/admin.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        SingleComponent,
        AdminComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
