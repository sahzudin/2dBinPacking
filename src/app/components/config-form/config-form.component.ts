import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Algorithm, PackerService } from 'src/app/services/packer.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit {

  display: boolean = false;
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private packerService: PackerService,
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {

    this.layoutService.configDialog$.subscribe( state => {
      this.display = state;
    })

    this.form = this.fb.group({
      width: [316],
      height: [275],
      depth: [112],
      padding: [2],
      algorithm: [Algorithm.MAX_WIDTH],
      limit: [false],
      pallete_count: [0],
      item_depth: [15]
    })
  }

  applyConfiguration(){
    this.packerService.updateConfig(this.form.value)
    this.display = false;
  }
}
