import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-packer-info',
  templateUrl: './packer-info.component.html',
  styleUrls: ['./packer-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackerInfoComponent implements OnInit {

  @Input() packer: Packer

  constructor() { }

  ngOnInit(): void {
  }

}
