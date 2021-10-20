import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/info';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public info:IInfo[] = [];

  constructor(private _infoService: InfoService) { }

  ngOnInit(): void {
    this._infoService.getInfo()
      .subscribe(data => this.info = data);
  }

}
