import { Component, OnInit } from '@angular/core';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-packer',
  templateUrl: './packer.component.html',
  styleUrls: ['./packer.component.scss']
})
export class PackerComponent implements OnInit {

  packer: Packer

  constructor(
    private packerClass: Packer
  ) { }

  ngOnInit(): void {
    this.packer = this.packerClass
  }

}
