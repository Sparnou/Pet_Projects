import {Component} from '@angular/core';
import * as moment from 'moment';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent{
  constructor(private userService: UserService) {}

  dateFormat(date) {
    return moment(date).format('DD MMMM YYYY');
  }
}


