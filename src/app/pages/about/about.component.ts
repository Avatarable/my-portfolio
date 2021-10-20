import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public info:any = {};

  constructor(private _infoService: InfoService) { }

  ngOnInit(): void {
    this._infoService.getInfo()
      .subscribe((data:any) => {this.info = data.data;});
  }

}
