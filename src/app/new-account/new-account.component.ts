import { Component } from '@angular/core';
import { logingService } from '../loging.service';
import { accountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[logingService]
})
export class NewAccountComponent {
  constructor(private ls:logingService,private accountservice:accountService){
    this.accountservice.accountstatus.subscribe((status:string)=>{
      alert('new status : '+status)

    });
  }
 

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addaccount(accountName,accountStatus)
    
    
  }
}
