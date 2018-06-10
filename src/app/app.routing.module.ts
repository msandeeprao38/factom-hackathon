import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChainComponent } from './create-chain/create-chain.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'landing', component: AppComponent,
  },
  { path: 'create', component: CreateChainComponent},
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})

export class AppRoutingModule { }
