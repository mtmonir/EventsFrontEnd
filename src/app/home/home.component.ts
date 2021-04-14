import { Component, OnInit } from '@angular/core';

import { EventService,  AccountService } from '@app/_services';
import { RawPreviewEvent} from './../_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;
    public allSignedEvents =  Array<RawPreviewEvent>();

    constructor(
    
      private eventService: EventService,
    
      private accountService: AccountService
    ) { } 

    ngOnInit(): void {

      this.getAllSignedEvents();
    }
  
    getAllSignedEvents(){
      this.eventService.getAllSigned(this.account.id)
      .subscribe(x => this.allSignedEvents = x);
      console.log(this.allSignedEvents);
    
    }
}