interface Photo {
  value: string;
}

interface Name {
  familyName: string;
  givenName: string;
}

interface RawJson {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}

interface User {
  id: string;
  displayName: string;
  name: Name;
  photos: Photo[];
  provider: string;
  accessToken: string;
  refreshToken: string;
  _raw: string;
  _json: RawJson;
}

export default User;
