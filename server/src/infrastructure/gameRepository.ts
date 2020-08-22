import GameRepo from '../core/repository';
import mongoose from 'mongoose';

export class SqlGameRepo implements GameRepo {
  SERVER = '127.0.0.1:27017';
  DATABASE = 'NarvieslandDB';

  signin = async (username: string, password: string): Promise<boolean> => {
    try {
      return false;
    } catch (error) {
      throw Error('Error');
    }
  };
}
