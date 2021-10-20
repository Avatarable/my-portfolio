import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
    var head  = document.getElementsByTagName('head')[0];

    function addCSS(id:string, href:string){
      var link  = document.createElement('link');
      link.id   = id;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      link.media = 'all';
      head.appendChild(link);
    }

    addCSS("projcss", "assets/css/style.css");
    addCSS("navcss", "assets/css/nav.css");
    
   }

  ngOnInit(): void {
    
    $.getScript("assets/js/main.js");
    $.getScript("assets/js/contact.js");
    $.getScript("assets/js/nav.js");
    $.getScript("assets/js/main.js");
    
  }
}
