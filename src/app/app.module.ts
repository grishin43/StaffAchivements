import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';
import {SingleComponent} from './single/single.component';
import {AdminComponent} from './admin/admin.component';
import {FilterPipe} from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AchievesComponent } from './achieves/achieves.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        SingleComponent,
        AdminComponent,
        FilterPipe,
        AchievesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
