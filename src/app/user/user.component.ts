import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AppService } from './../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  createEntryForm: FormGroup;
  users;
  signature;
  isSigned = false;
  caseId;
  chains;

  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }

  ngOnInit() {
    this.createEntryForm = this.fb.group({
      user: ['', Validators.required],
      payload: ['', Validators.required],
      chain_id: ['', Validators.required]
    });
    this.getUsers();
    this.getChains();
    this.caseId = this.service.getCaseId();
    console.log(this.caseId);

  }

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getChains() {
    const data = {
      'external_ids': [this.service.getCaseId()]
    };
    this.service.getChains(data).subscribe((res) => {
      this.chains = res;
    });

  }

  signPayload() {
    const data = this.createEntryForm.value;
    this.service.signPayload(data).subscribe((res) => {
      this.signature = res['signature'];
      this.isSigned = true;
    });
  }

  VerifyPayload() {
    const data = this.createEntryForm.value;
    data['signature'] = this.signature;
    this.service.verifyPayload(data).subscribe((res) => {
      alert('Payload is verified');
    });
  }

  onSubmit() {
    const data = this.createEntryForm.value;
    data['signature'] = this.signature;
    data['external_ids'] = [this.caseId];
    this.service.addEntry(data).subscribe((res) => {
      console.log(res);
      this.createEntryForm.reset({
        user: '',
        payload: '',
        chain_id: '',
      });
    });
  }

}
