import { Component, OnInit } from '@angular/core';
import { Students } from '../mock-students';
@Component({
  selector: 'app-stu-new',
  templateUrl: './stu-new.component.html',
  styleUrls: ['./stu-new.component.css']
})
export class StuNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addname=''
  addsex=''
  addid=''
  addposition=''
  students=Students
  
  addstudent(){
if(this.addid===''||this.addname===''||this.addsex===''||this.addposition==='')
{
  alert('添加失败，添加项不能为空');  
  return
}
let id
if (this.students.length===0) {
  id=1
}else{
  id = this.students[this.students.length-1].id+1
}

this.students.push({
id,
name:this.addname,
stuid:this.addid,
sex:this.addsex,
position:this.addposition
})
  
  }
}
