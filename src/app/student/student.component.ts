import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Students } from '../mock-students';
import { student } from '../student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students=Students
  delstudent(e:any,id:number){
   
    e.preventDefault()
    this.students=this.students.filter(student =>student.id!=id)
  }
 
  constructor() { }
  
  ngOnInit(): void {
  }

}
