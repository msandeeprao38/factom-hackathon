import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  caseId;
  navList = ['user', 'admin'];

    constructor(
      private fb: FormBuilder,
      private service: AppService
    ) {
  }

  ngOnInit() {
  }

  createParentChain() {
    this.service.createParentChain().subscribe((res) => {
      console.log(res);
      this.caseId = res['ChainId'];
      this.service.setCaseId(this.caseId);
    });
  }
}
