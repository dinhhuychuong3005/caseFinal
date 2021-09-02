export class JwtResponse {
  token?: string;
  name?: string;
  userName?: string;
  roles?: any[];
  constructor(token: string, name: string, userName: string, roles: any) {
    this.token = token;
    this.name = name;
    this.userName = userName;
    this.roles = roles;
  }
}
