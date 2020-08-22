export default interface GameRepo {
  signin(username: string, password: string): Promise<boolean>;
}
