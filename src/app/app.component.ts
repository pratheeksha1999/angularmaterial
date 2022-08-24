import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('likeBtn') likeBtn: ElementRef;

  onLike(): void {
    this.likeBtn._elementRef.nativeElement.innerText === 'LIKE' ?
    this.likeBtn._elementRef.nativeElement.innerText = 'LIKED' :
    this.likeBtn._elementRef.nativeElement.innerText = 'LIKE'
  }
}
