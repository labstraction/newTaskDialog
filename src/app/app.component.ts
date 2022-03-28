import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'taskDialog';

  dialogVisibility = 'visible'

  openDialog(){
    if(this.dialogVisibility === 'visible'){
      this.dialogVisibility = 'invisible'
    } else {
      this.dialogVisibility = 'visible'
    }
  }

  displayDialogResult(result: string){
    console.log(result);
    if(this.dialogVisibility === 'visible'){
      this.dialogVisibility = 'invisible'
    } else {
      this.dialogVisibility = 'visible'
    }
  }
}
