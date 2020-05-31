import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
display:boolean=false;
  form={
    fname:'',
    lname:'',
    mno:'',
    address:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {
    console.log(this.form);
    this.display=true;
  }
  displayValue()
  {
    window.location.reload();
  }

}
