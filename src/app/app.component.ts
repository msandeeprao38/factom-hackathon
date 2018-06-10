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
  formOpened = false;
  displayChains = false;
  createChainForm: FormGroup;
  addUserForm: FormGroup;
  createCaseForm: FormGroup;
  chains;
  users;
  usersList = new FormControl();

    constructor(
      private fb: FormBuilder,
      private service: AppService
    ) {
  }

  ngOnInit() {
    this.createChainForm = this.fb.group({
      external_id: ['', Validators.required],
      case_id: ['', Validators.required]
    });

    this.addUserForm = this.fb.group({
      chain: ['', Validators.required],
      users: ['', Validators.required]
    });

    this.createCaseForm = this.fb.group({
      parentid: ['', Validators.required],
      childid: ['', Validators.required]
    });

  }

  createChain() {
    this.formOpened = true;
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
    this.service.createChain(this.createChainForm.value).subscribe((res) => {
      console.log(res);
      this.formOpened = false;
    });
  }
}
