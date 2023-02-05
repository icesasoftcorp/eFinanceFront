import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
})
export class VerticalComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
    document.documentElement.setAttribute('data-layout', 'vertical');
    document.documentElement.setAttribute('data-topbar', 'light');
    document.documentElement.setAttribute('data-sidebar', 'dark');
    document.documentElement.setAttribute('data-layout-style', 'default');
    document.documentElement.setAttribute('data-layout-mode', 'light');
    document.documentElement.setAttribute('data-layout-width', 'fluid');
    document.documentElement.setAttribute('data-layout-position', 'fixed');
    document.documentElement.setAttribute('data-sidebar-image', 'none');
    document.documentElement.setAttribute('data-preloader', 'disable');
    window.addEventListener('resize' , function(){
      if (document.documentElement.clientWidth <= 767) {
        document.documentElement.setAttribute('data-sidebar-size', '');
      }
      else if (document.documentElement.clientWidth <= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
      }
      else if (document.documentElement.clientWidth >= 1024) {      
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
      }
    })
  }

}
