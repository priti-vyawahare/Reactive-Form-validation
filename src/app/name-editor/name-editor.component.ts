import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  public reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  public showTopMessage = false;
  title = "Tournament Details";
  profileForm = this.pf.group({
    tournamentName: ['', Validators.required],
    place: ['', Validators.required],
    startdate: ['', Validators.required],
    enddate: ['', Validators.required],
    round: ['', Validators.required],
    category: ['', Validators.required],
    website: ['', [Validators.required, Validators.pattern(this.reg)]],
  });
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //  error:String:"please fill the form!! ";

  // }
  constructor(private pf: FormBuilder) {
    this.profileForm.status
  }

  public get isAnyControlTouched(): boolean {
    let controlTouched: boolean | undefined;
    for (const field in this.profileForm.controls) { // 'field' is a string

      const control = this.profileForm.get(field); // 'control' is a FormControl  
      controlTouched = control?.touched;
      if (controlTouched) {
        break;
      }
    }
    if (controlTouched) {
      return true;
    } else {
      return false;
    }
  }
  get f() {
    return this.profileForm.controls;
  }

  public validateForm(): void {
    if (this.profileForm.status === 'INVALID' && this.isAnyControlTouched) {
      this.showTopMessage = true;
    } else {
      this.showTopMessage = false;
    }
  }
 
}
