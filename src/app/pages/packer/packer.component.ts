import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-packer',
  templateUrl: './packer.component.html',
  styleUrls: ['./packer.component.scss']
})
export class PackerComponent implements OnInit {

  packer: Packer
  itemCount$: Observable<any>

  constructor(
    private packerClass: Packer,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.packer = this.packerClass

    this.itemCount$ = this.ds.itemCount$;
  }

  pack(){
    this.packer.pack();
  }

}
