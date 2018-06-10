import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChainComponent } from './create-chain/create-chain.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
  },
  { path: 'user', component: UserComponent},
  { path: '',
    redirectTo: '/admin',
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
