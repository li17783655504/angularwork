import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StuEditComponent } from './stu-edit/stu-edit.component';
import { StuNewComponent } from './stu-new/stu-new.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    StuEditComponent,
    StuNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule,
    HttpClientModule,
  ],
   
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
  
}
