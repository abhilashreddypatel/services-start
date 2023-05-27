import { EventEmitter } from "@angular/core";

export class accountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    accountstatus = new EventEmitter<string>();
      addaccount(name:string,status:string){
        this.accounts.push({name:name,status:"status"});

      }

      updatestatus(id:number, status:string){
        this.accounts[id].status = status;
  }

      }
