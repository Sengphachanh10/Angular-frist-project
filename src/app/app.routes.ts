import { Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AchievementComponent } from './achievement/achievement.component';



export const routes: Routes = [
    { path:'', component:SplashScreenComponent},
    { path:'on-boarding', component:OnBoardingComponent},
    { path:'sign-up', component:SignUpComponent},
    { path:'select-avatar', component:SelectAvatarComponent},
    { path:'home', component:HomeComponent},
    { path:'explore', component:ExploreComponent},
    { path:'quiz-screen', component:QuizScreenComponent},
    { path:'scoreboard', component:ScoreboardComponent},
    { path:'leaderboard', component:LeaderboardComponent},
    { path:'achievement', component:AchievementComponent}
];
