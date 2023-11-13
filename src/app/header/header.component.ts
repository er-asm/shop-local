import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  showMenu: boolean = false;
  showIcon: boolean = true;
  showCross: boolean= false;
  toggleMenus: boolean=false;

  ngOnInit(): void {

  }
  constructor(){}

  toggleMenu(){

    //this.showMenu = !this.showMenu;
    this.showCross = !this.showCross;
    this.showIcon = !this.showIcon;
    this.toggleMenus= !this.toggleMenus;


  }

}
