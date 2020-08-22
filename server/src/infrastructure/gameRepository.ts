import gameRepository from '../core/repository';

export class GameRepo implements gameRepository {
  signin = (username: string, password: string): boolean => {
    return false;
  };
}
