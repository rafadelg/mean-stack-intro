import { Routes, RouterModule}  from '@angular/router';
import { AccessService } from './services/access.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = 
  [
    { path:'login',
      component:LoginComponent
    },
    { path:'',
      component:HomeComponent,
      canActivate:[AccessService] 
    },
    { path:'**',
      redirectTo:''
    }
  ];
  
  export const routing = RouterModule.forRoot(appRoutes);
