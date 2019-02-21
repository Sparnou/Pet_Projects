export class User {
  constructor(
    public id: number,
    public username: string,
    public age: number,
    public password: string,
    // public information: string,
    public dateOfBirth: string,
    public dateOfFirstLogin: string,
    public dateOfNextNotification: string,
  ) {}
}
