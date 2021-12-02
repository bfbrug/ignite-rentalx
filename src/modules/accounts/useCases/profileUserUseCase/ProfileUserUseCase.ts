import { inject, injectable } from 'tsyringe';

import { IUserResponseTDO } from '@modules/accounts/dtos/IUserResponseTDO';
import { UserMap } from '@modules/accounts/mapper/UserMap';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUserResponseTDO> {
    const user = await this.usersRepository.findById(id);

    return UserMap.toTDO(user);
  }
}

export { ProfileUserUseCase };
