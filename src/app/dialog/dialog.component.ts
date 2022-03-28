import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('visibleInvisible', [
      state('visible', style({
        top: '0vh',
      })),
      state('invisible', style({
        top: '100vh',
      })),
      transition('visible => invisible', [
        animate('1s')
      ]),
      transition('invisible => visible', [
        animate('1s')
      ]),
    ]),
  ]
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() visibilityState = 'invisible'
  @Output() closedWithResult = new EventEmitter<string>();

  ngOnInit(): void {
  }

  closeDialog(result?: string ){
    if (result) {
      this.closedWithResult.emit(result);
    }
    this.visibilityState = 'invisible'
  }

  logEvent(event: any){
    console.log(event)
  }


}
