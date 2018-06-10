import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '.././app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formOpened = false;
  displayChains = false;
  createChainForm: FormGroup;
  addUserForm: FormGroup;
  createCaseForm: FormGroup;
  chains;
  users;
  caseId;

  constructor(
      private fb: FormBuilder,
      private service: AppService) { }

  ngOnInit() {

    this.addUserForm = this.fb.group({
      chainid: ['', Validators.required],
      users: ['', Validators.required]
    });

    this.createCaseForm = this.fb.group({
      parentid: ['', Validators.required],
      childid: ['', Validators.required]
    });
  }

  createForm() {
    this.createChainForm = this.fb.group({
      external_id: ['', Validators.required],
      case_id: [{value: this.caseId, disabled: true}, Validators.required]
    });
  }

  createChain() {
    this.formOpened = true;
    this.caseId = this.service.getCaseId();
    this.createForm();
  }

  getChains() {
    this.getUsers();
    this.displayChains = true;
    this.service.getChains().subscribe((res) => {
      this.chains = res;
    });

  }

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  addUsers() {
    console.log(this.addUserForm.value);
        this.service.addUsers(this.addUserForm.value).subscribe((res) => {
      console.log(res);
      this.displayChains = false;
    });
  }

  createCase() {
    this.service.createCase(this.createCaseForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  onCancel() {
    this.formOpened = false;
    this.createChainForm.reset({
      external_id: '',
      case_id: ''
    });
  }

  goBack() {
    this.displayChains = false;
    this.createCaseForm.reset({
      parentid: '',
      childid: ''
    });
    this.addUserForm.reset({
      chain: '',
      users: ''
    });
  }

  onSubmit() {
    const data = this.createChainForm.value;
    data['case_id'] = this.caseId;
    this.service.createChain(data).subscribe((res) => {
      console.log(res);
      this.formOpened = false;
    });
  }

}
