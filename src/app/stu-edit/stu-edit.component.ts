import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Students } from '../mock-students';
import { student } from '../student';
@Component({
  selector: 'app-stu-edit',
  templateUrl: './stu-edit.component.html',
  styleUrls: ['./stu-edit.component.css']
})
export class StuEditComponent implements OnInit {

  editname=''
  editsex=''
  editid=''
  editposition=''

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    ) { }
    students=Students
  ngOnInit(){
   
  } 

   
  editstudent(){
    if(this.editname===''||this.editid===''||this.editposition===''||this.editsex==='')
    {
      alert('添加失败，添加项不能为空');  
      return
    }
    let id=this.route.snapshot.params.id
    this.students[id-1]={
      id:id-1,
    name:this.editname,
    stuid:this.editid,
    sex:this.editsex,
    position:this.editposition
    }

}
}