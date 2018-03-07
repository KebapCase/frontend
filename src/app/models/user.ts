export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string;

  constructor(userProfile) {
    this.username = userProfile.nickname;
    this.password = userProfile.sub;
    this.firstName = userProfile.given_name;
    this.lastName = userProfile.family_name;
    this.image = userProfile.picture;
  }
}
