import { Component } from '@angular/core';
import { PoDialogService, PoMenuItem, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  
  constructor(private poDialog: PoDialogService, private poNotification: PoNotificationService) {  }
  title: string = 'Combio';
  

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };
 
  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'User data', action: (item: any) => this.showAction(item) },
    { icon: 'po-icon-company', label: 'Company data', action: (item: any) => this.showAction(item) },
    { icon: 'po-icon-settings', label: 'Settings', action: (item: any) => this.showAction(item) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: (item: any) => this.showAction(item) }
  ];

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

}
