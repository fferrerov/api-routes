import { CustomEndpoint } from 'ffv/ffv-api-routes';
import { UsersService } from 'src/modules/users/users.service';
import { IUser } from 'src/modules/users/user';

const usersService = new UsersService();

// 'http://localhost:3001/api/users'

export function GET() {
  return usersService.getUsers();
}

export const POST: CustomEndpoint = ({ body }): IUser[] => {
  const { newUser } = body;

  usersService.addUser(newUser);

  return usersService.getUsers();
};

export const PUT: CustomEndpoint = ({ body }): IUser[] => {
  const updateUser: IUser = body.updateUser;

  usersService.updateUser(updateUser);
  return usersService.getUsers();
};
