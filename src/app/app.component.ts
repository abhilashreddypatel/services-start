import { Component ,OnInit} from '@angular/core';
import { accountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[accountService]
})
export class AppComponent  implements OnInit{
  accounts :{name:string,status:string}[]=[];

  constructor(private accountsercvice:accountService){}

  ngOnInit(): void {
      this.accounts=this.accountsercvice.accounts;
  }


}
