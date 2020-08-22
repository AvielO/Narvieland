import GameRepo from '../core/repository';

export class SqlGameRepo implements GameRepo {
  signin = async (username: string, password: string): Promise<boolean> => {
    try {
      return false;
    } catch (error) {
      throw Error('Error');
    }
  };
}
