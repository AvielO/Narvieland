import GameRepo from '../core/repository';
import User from './mongoSchemas/User';

export class SqlGameRepo implements GameRepo {
  SERVER = '127.0.0.1:27017';
  DATABASE = 'NarvieslandDB';

  signin = async (username: string, password: string): Promise<boolean> => {
    try {
      const user = new User({ username, password });

      await user.save();
      return false;
    } catch (error) {
      throw Error('Error');
    }
  };
}
