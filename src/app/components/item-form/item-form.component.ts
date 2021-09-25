import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['item 1', [Validators.required]],
      width: [400, [Validators.required]],
      height: [400, [Validators.required]],
      quantity: [1, [Validators.required]],
    })

  }

  add(){
    this.ds.addItem(this.form.value)
  }

  clear(){
    this.ds.removeAll();
  }


}
