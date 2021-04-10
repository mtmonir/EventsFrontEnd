import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@app/_services';

import { RawDetailEvent} from './../../_models';

@Component({
  selector: 'app-detailevent',
  templateUrl: './detailevent.component.html',
  styleUrls: ['./detailevent.component.less']
})
export class DetaileventComponent implements OnInit {
  eventid: string;
  revent = new RawDetailEvent();
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.route.queryParams
        .subscribe(params => {
        this.eventid = params.id;
        console.log(this.eventid);
      }
    );
    this.getRawDetailEvent();
  }

  getRawDetailEvent(){
    this.eventService.getById(this.eventid)
    .subscribe(x=> this.revent = x);
  }
}


