import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output() labelEmitted = new EventEmitter<string>();

  constructor(private router: Router) {}
  logoPath: string = './assets/Logo.png';
  menuItemSelected: string = '';
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', action: () => this.goMenu('/home','Pagina Principal') },
    {
      label: 'Administração',
      icon: 'po-icon po-icon-settings',
      shortLabel: 'Admin',
      subItems: [
        { label: 'User', icon: 'po-icon po-icon-user', action: () => this.goMenu('/user','Usuários') }
      ]
    },
    { label: 'Usuario', icon: 'po-icon po-icon-user', action: this.onClick.bind(this) },
    { label: 'Temas', icon: 'po-icon po-icon-user', action: this.onClick.bind(this) },
   
  ];

  private goMenu(link: string, title: string) {
    this.labelEmitted.emit(title)
    this.router.navigate([link])
  }

  private onClick() {
    alert('Clicked in menu item Novo')
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
