import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testForm : FormGroup;

  constructor(fb: FormBuilder) { 
    this.testForm = fb.group({
      notification : new FormControl(null,  Validators.required),
      email : new FormControl(null, null),
      phone : new FormControl(null, null),
    })
  }

  ngOnInit() {
    this.testForm.get('notification').valueChanges
                         .subscribe(value => this.setNotification(value));
  }

  setNotification(notifyVia: string): void {
    //debugger;
    const phoneControl = this.testForm.get('phone');
    if (notifyVia === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
