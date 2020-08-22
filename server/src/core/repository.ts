export default interface GameRepository {
  signin(username: string, password: string): Boolean;
}
