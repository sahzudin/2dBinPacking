import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaProps } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Algorithm, PackerConfig, PackerService } from 'src/app/services/packer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  palletes$: Observable<any>
  form: FormGroup

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private packerService: PackerService,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      width: [],
      height: [],
      depth: [],
      padding: [],
      item_depth: [],
      savedPallete: [{}]
    })

    this.packerService.config$.subscribe( config => {
      this.form.controls['width'].setValue(config.width)
      this.form.controls['height'].setValue(config.height)
      this.form.controls['depth'].setValue(config.depth)
      this.form.controls['padding'].setValue(config.padding)
      this.form.controls['item_depth'].setValue(config.item_depth)
    })

    this.palletes$ = this.apiService.getPalletes()
  }

  savePallete(){
    this.apiService.createPallete(this.form.value)
  }

  applyChanges(){
    let config: PackerConfig = {
      width: this.form.controls['width'].value,
      height: this.form.controls['height'].value,
      depth: this.form.controls['depth'].value,
      padding: this.form.controls['padding'].value,
      algorithm: Algorithm.BRUTE_FORCE,
      limit: false,
      pallete_count: 0,
      item_depth: this.form.controls['item_depth'].value,
    }

    this.packerService.updateConfig(config)
  }

  applySaved(){
    let config: PackerConfig = {
      width: this.form.controls['savedPallete'].value.width,
      height: this.form.controls['savedPallete'].value.height,
      depth: this.form.controls['savedPallete'].value.depth,
      padding: this.form.controls['padding'].value,
      algorithm: Algorithm.BRUTE_FORCE,
      limit: false,
      pallete_count: 0,
      item_depth: this.form.controls['item_depth'].value,
    }

    this.packerService.updateConfig(config)
  }

}
