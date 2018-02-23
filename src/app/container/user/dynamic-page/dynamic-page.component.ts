import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicPageModel} from './dynamic-page.model';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {
dynamicForm:FormGroup;
formdata :DynamicPageModel[];
  countries = [
   {id:1, name:'USA'},
     {id:2, name:'India'},
     {id:3, name:'Australia'},
     {id:4, name: 'Brazil'}
  ];
  constructor() { }

  ngOnInit() {
    
    this.formdata = new Array;
this.dynamicForm = new FormGroup({

  name:new FormControl(null),
  company:new FormControl(null),
  qty:new FormControl(null),
  status:new FormControl(null),
  country:new FormControl(null)
});



  }

  onSubmit(){
    console.log(this.dynamicForm.value);
this.formdata.push(this.dynamicForm.value);
  }

  onEdit(index){
//console.log(this.formdata[index]);
this.dynamicForm.patchValue(this.formdata[index]);

  }

}
