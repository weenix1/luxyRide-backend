export interface SignupDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  customerId: string;
  token: string;
}
