import { Component, Input } from '@angular/core';
import { accountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[ ]
})
export class AccountComponent {
  constructor(private as:accountService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;
  


  onSetTo(status: string) {
    this.as.updatestatus(this.id,status);
    console.log('A server status changed, new status: ' + status);
    this.as.accountstatus.emit(status);
  }
}
