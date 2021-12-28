import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { MenuComponent } from './menu/menu.component';






import { RegisterComponent } from './register/register.component';
import { GreetEmpComponent } from './greet-emp/greet-emp.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { AddAssessmentScoreComponent } from './add-assessment-score/add-assessment-score.component';
import { AssessmentScoreComponent } from './assessment-score/assessment-score.component';
import { UpdateScoreComponent } from './update-score/update-score.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,

    RegisterComponent,
    GreetEmpComponent,
    SearchComponent,
    UpdateComponent,
    SignupComponent,
    AddAssessmentScoreComponent,
    AssessmentScoreComponent,
    UpdateScoreComponent
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
export class AppModule { }
