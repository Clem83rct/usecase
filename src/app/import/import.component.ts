import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable, of } from 'rxjs';
import { finalize, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import {   } from '@angular/core';
import { UploadService } from  '../upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportToFirebaseComponent implements OnInit{
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }
  ngOnInit() { }
  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar')!.updateValueAndValidity()
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name')!.value);
    formData.append("avatar", this.form.get('avatar')!.value);
    this.http.post('http://127.0.0.1:5001/importcsv', formData, {responseType: 'text'}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
