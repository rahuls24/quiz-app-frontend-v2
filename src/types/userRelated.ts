export type UserRole = 'examiner' | 'examinee';
export type UserDetails = {
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
};

export type Page = {
  name: string;
  path: string;
};
