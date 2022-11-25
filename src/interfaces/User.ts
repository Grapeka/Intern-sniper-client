import MediaLink from "./MediaLink";

interface User {
  userId: string | null;
  mediaLink: MediaLink[] | null;
  role: string;
  email: string;
  password: string;
  salt: string | null;
  profilePicture: string | null;
}

export default User;
