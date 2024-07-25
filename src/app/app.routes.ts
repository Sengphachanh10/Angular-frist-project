import { Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    { path:'', component:SplashScreenComponent},
    { path:'on-boarding', component:OnBoardingComponent},
    { path:'sign-up', component:SignUpComponent},
    { path:'select-avatar', component:SelectAvatarComponent},
    { path:'home', component:HomeComponent}
];
