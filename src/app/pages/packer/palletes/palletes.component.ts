import { Component, Input, OnInit } from '@angular/core';
import { PackerConfig } from 'src/app/services/packer.service';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';
import { SwiperOptions } from 'swiper';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-palletes',
  templateUrl: './palletes.component.html',
  styleUrls: ['./palletes.component.scss']
})
export class PalletesComponent implements OnInit {

  @Input() palletes: [Sheet[]]
  @Input() config: PackerConfig
  @Input() itemsCount: number
  selectedPallete: Sheet[]
  activeItem = null;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true }
  }

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.palletes);

  }

  selectPallete(pallete: Sheet[], index){
    this.selectedPallete = pallete
    this.activeItem = index
  }

}
