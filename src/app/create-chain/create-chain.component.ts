import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-chain',
  templateUrl: './create-chain.component.html',
  styleUrls: ['./create-chain.component.css']
})
export class CreateChainComponent implements OnInit {


  createChainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }

  ngOnInit() {
    this.createChainForm = this.fb.group({
      external_id: ['', Validators.required],
      case_id: ['', Validators.required]
    });
  }

}
