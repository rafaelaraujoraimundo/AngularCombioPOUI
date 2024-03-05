import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public userlist: any[] = [];
  private page = 1;
  private pageSize = 50;
  private dataUser: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  updateTitleMenu() {
  }
  ngAfterContentInit() {
    this.updateTitleMenu() ;
  }

  loadUsers() {
    this.userService.getAllUsers(this.page, this.pageSize).subscribe({
      next: (data: any) => {
        this.dataUser = data
       this.dataUser.items.forEach( (data: any) => {
        this.userlist.push(data)
       })

      }
    })

  }

  loadNextPage() {
    this.page++;
    this.loadUsers();
  }
}
