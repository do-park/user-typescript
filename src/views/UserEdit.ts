import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  template(): string {
    return `
      <div>
        <div class="user-show">
          <h1></h1>
        </div>
        <div class="user-form"></div>
      </div>
    `;
  }
}