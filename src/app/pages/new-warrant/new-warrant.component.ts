import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warrant } from 'src/app/components/dialogs/importer-dialog/importer-dialog.component';
import { CreateWarrantRequest } from 'src/app/requestModels/CreateWarrantRequest';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-new-warrant',
  templateUrl: './new-warrant.component.html',
  styleUrls: ['./new-warrant.component.scss']
})
export class NewWarrantComponent implements OnInit {
  
  form: FormGroup;

  warrant: Warrant;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      width: [100, [Validators.required]],
      height: [100, [Validators.required]],
      quantity: [1, [Validators.required]],
    })

    this.ds.warrant$.subscribe(res => {
      this.warrant = res;
    })
  }

  add(){
    this.ds.addItem(this.form.value)
  }

  remove(item){
    this.ds.removeItem(item)
  }

  save(){
    let request: CreateWarrantRequest = {
      items: JSON.stringify(this.warrant.items),
      created_at: Date.now()
    }

    this.apiService.createWarrant(request)
  }
  
}
