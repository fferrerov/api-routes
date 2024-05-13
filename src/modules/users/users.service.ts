import { Injectable } from '@nestjs/common';
import { IUser } from './user';

@Injectable()
export class UsersService {
  users: IUser[] = [];

  getUsers() {
    return this.users;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }

  updateUser(user: IUser) {
    this.users = this.users.map((u) => (u.id === user.id ? user : u));
  }
}
