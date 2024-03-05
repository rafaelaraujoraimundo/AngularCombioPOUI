import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoDialogService, PoMenuItem, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { MenuComponent } from '../menu/menu.component';
import { Subscription } from 'rxjs';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnDestroy {
  

  title: string = 'Combio';
  private subscription: Subscription;

  constructor(private poDialog: PoDialogService, private poNotification: PoNotificationService, private coreService: CoreService) { 

    this.subscription = this.coreService.getSignalObservable().subscribe(data => {
      this.title = data;
    });
   }
 


  

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

  ngOnDestroy(): void {
  
  }


}
