import MediaLink from "./MediaLink";

interface User {
  userId: String | null;
  mediaLink: MediaLink[] | null;
  role: String;
  email: String;
  password: String;
  salt: String | null;
  profilePicture: String | null;
}

export default User;
