import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'bob';
  x: number = 0;
  y: number = 0;
  show: boolean = true;

  callName() {
    alert(this.name);
  }
  updateXy(event: DragEvent){
    this.x = event.clientX
    this.y = event.clientY
    console.log(event)
  }
  toggleShow(){
    this.show = !this.show;
    console.log(this.show)
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
