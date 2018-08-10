import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

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
      email : new FormControl(null,this.customEmailValidator()),
      phone : new FormControl(null, null),
    })
  }

  ngOnInit() {
    this.testForm.get('notification').valueChanges
                         .subscribe(value => this.setNotification(value));
  }

// customEmailValidator(control: AbstractControl): ValidationErrors|null{
//     if(control.value !="Sachin@Sachin.Com"){
//       return {"custom": 'invalid'};
//     }
//     return null;
// }

customEmailValidator(): ValidatorFn
{
    return (control:AbstractControl):ValidationErrors|null=>{

    if(control.value !="Sachin@Sachin.Com"){  
      return {"customError": { inValid:true,errMsg:'Invalid Email ID' }};
    }
    return null;}
}

// customEmailValidator(): ValidatorFn
// {
//     return this.custValidationfunction;
// }

// custValidationfunction(control:AbstractControl){

//     if(control.value !="Sachin@Sachin.Com"){
//       return {"custom": 'invalid'};
//     }
//     return null;
// }

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
