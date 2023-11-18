import { Component, ElementRef, ViewChild } from '@angular/core';
declare const UIkit: any;
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  intervalId: any = undefined;
  dataSlide = [
    {
      title: 'titulo1', shortDescription: 'decripcion corta 1',
      imgPath: 'https://firebasestorage.googleapis.com/v0/b/urco-c9a35.appspot.com/o/goods%2Fbackpack_PNG6359.png?alt=media&token=919829d6-d6e2-4f62-af68-1fc6cc6b4263'
    },{
      title: 'titulo2', shortDescription: 'descripcion corta 2',
      imgPath: 'assets/images/slide/smartwatch.png'
    },{
      title: 'titulo3', shortDescription: 'descripcion corta 3',
      imgPath: 'assets/images/slide/smartphone.png'
    }]
    counterSlide = 0
    dataSlideShow: any = {}
    defaultSlide = 0
  ngOnInit() {
    this.intervalId = setInterval(() => this.handleIntervalSlide(), 4000);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
  handleIntervalSlide() {
    const lenghtContainerData = this.dataSlide.length
    if ( this.defaultSlide >= (lenghtContainerData -1)) {
      this.defaultSlide = 0;
      return
    }
    this.defaultSlide++
  }
}
