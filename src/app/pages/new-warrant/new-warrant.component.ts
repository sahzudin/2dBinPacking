import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreateItemRequest, CreateWarrantRequest } from 'src/app/requestModels/CreateWarrantRequest';
import { ApiService } from 'src/app/services/api.service';
import { DataService, Warrant } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-new-warrant',
  templateUrl: './new-warrant.component.html',
  styleUrls: ['./new-warrant.component.scss']
})
export class NewWarrantComponent implements OnInit {

  @ViewChild('focus') focusElement: ElementRef

  form: FormGroup;
  saveWarrantForm: FormGroup

  warrant: Warrant;
  savedItems$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      width: [100, [Validators.required, Validators.min(0)]],
      height: [100, [Validators.required, Validators.min(0)]],
      quantity: [1, []],
      savedItem: [null, []]
    })

    this.saveWarrantForm = this.fb.group({
      name: ['']
    })

    this.ds.warrant$.subscribe(res => {
      this.warrant = res;
    })

    this.savedItems$ = this.apiService.getItems();
    this.savedItems$.subscribe(res => {
      console.log(res);

    })
  }

  add(){
    this.ds.addItem(this.form.value)
    this.focusElement.nativeElement.focus()
    this.focusElement.nativeElement.select()
  }

  addSavedItem(){
    let item = this.form.controls['savedItem'].value
    if(item != null){
      this.ds.addItem(item)
    }
  }

  remove(item){
    this.ds.removeItem(item)
  }

  save(){
    let request: CreateWarrantRequest = {
      name: this.saveWarrantForm.controls['name'].value,
      items: JSON.stringify(this.warrant.items),
      created_at: Date.now()
    }

    this.apiService.createWarrant(request)
  }

  saveItem(){
    let request: CreateItemRequest = {
      width: this.form.controls['width'].value,
      height: this.form.controls['height'].value
    }

    this.apiService.createItem(request)
  }

  onFileSelected(event) {

    const formData: FormData = new FormData();
    let files = event.target.files;

    for (var i = 0; i < files.length; i++) {
      formData.append('warrant', files[i])
    }

    this.apiService.uploadWarrant(formData)
  }

}
