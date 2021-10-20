import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "maincss";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/main.css';
    link.media = 'all';
    head.appendChild(link)
   }

  ngOnInit(): void {
    $.getScript("assets/js/main_prof.js");
    $.getScript("assets/js/headline.js");
    $.getScript("assets/js/contact.js");
  }

}
