import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class PalletesComponent implements OnInit, OnChanges {

  @Input() palletes: [Sheet[]]
  @Input() config: PackerConfig
  @Input() itemsCount: number
  selectedPallete: Sheet[]
  activeItem = 0;

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

  ngOnChanges(changes: SimpleChanges){
    if(changes.palletes){
      this.selectedPallete = this.palletes[0];
      this.selectedPallete.sort( (a: Sheet, b: Sheet) => a.efficiency - b.efficiency).reverse()
      this.activeItem = 0
    }
  }

  selectPallete(pallete: Sheet[], index){
    this.selectedPallete = pallete
    this.activeItem = index

    this.selectedPallete.sort( (a: Sheet, b: Sheet) => a.efficiency - b.efficiency).reverse()

    console.log(this.selectPallete);
    console.log(this.activeItem);


  }

  print(){
    console.log('Printing content');
    let links = document.getElementsByTagName('link')
    let styles = document.getElementsByTagName('style')
    let sheets = document.getElementsByClassName('sheet')


    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head>');

    mywindow.document.write('</head><body >');
    mywindow.document.write('</body></html>');

    let body = mywindow.document.body
    body.style.display = 'flex'
    body.style.flexWrap = 'wrap'
    body.style.columnGap = '10px'

    for (let index = 0; index < links.length; index++) {
      let element = links[index].cloneNode(true);
      mywindow.document.head.appendChild(element)
    }

    for (let index = 0; index < styles.length; index++) {
      const element = styles[index].cloneNode(true);
      mywindow.document.head.appendChild(element)
    }

    for (let index = 0; index < sheets.length; index++) {
      let element = sheets[index].cloneNode(true);
      mywindow.document.body.appendChild(element)
    }

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;

  }

}
