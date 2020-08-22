import GameRepo from '../core/repository';

export const signin = async (username: string, password: string, repo: GameRepo): Promise<boolean> => {
  return await repo.signin(username, password);
};

export const signup = (): void => {
  console.log('Action');
};
