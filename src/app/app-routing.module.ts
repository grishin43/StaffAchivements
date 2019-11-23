import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {SingleComponent} from './single/single.component';

const routes: Routes = [
    {path: '', component: ListComponent},
    {path: 'list', component: ListComponent},
    {path: 'achievement/:id', component: SingleComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
