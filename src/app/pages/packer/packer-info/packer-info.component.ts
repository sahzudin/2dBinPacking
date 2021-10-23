import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-packer-info',
  templateUrl: './packer-info.component.html',
  styleUrls: ['./packer-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackerInfoComponent implements OnInit {

  @Input() packer: Packer

  constructor(
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
  }

  openItemInfo(){
    this.layoutService.itemInfoDialog.next(true)
  }

  openConfigInfo(){
    this.layoutService.configDialog.next(true)
  }

  openImporterDialog(){
    this.layoutService.importerDialog.next(true)
  }

}
