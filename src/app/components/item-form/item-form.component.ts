import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/Packer/Item';

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
      width: [100, [Validators.required]],
      height: [100, [Validators.required]],
      quantity: [1, [Validators.required]],
    })

  }

  add(){
    this.ds.addItem(this.form.value)
  }

}
