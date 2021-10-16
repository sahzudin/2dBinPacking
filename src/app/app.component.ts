import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';
import { DataService } from './data/data.service';
import { PackerService } from './services/packer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(){

  }

}
