export class User {
  constructor(
    public avatar_url: string,
    public bio: string,
    public followers: number,
    public login: string,
    public location: string,
    public repos: string,
    public url: string
  ) {}
}
