import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private packerService: PackerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      width: [400],
      height: [400],
      depth: [400],
      padding: [20],
      algorithm: [Algorithm.MAX_WIDTH],
      limit: [false],
      pallete_count: [0],
      item_depth: [10]
    })
  }

  applyConfiguration(){
    this.packerService.updateConfig(this.form.value)
    this.display = false;
  }
}
